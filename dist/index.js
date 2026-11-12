"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.providersData = void 0;
exports.detectProvider = detectProvider;
exports.getProviderDetails = getProviderDetails;
exports.detectLocation = detectLocation;
const providers_json_1 = __importDefault(require("./providers.json"));
exports.providersData = providers_json_1.default;
const hlr_data_json_1 = __importDefault(require("./hlr-data.json"));
const providerMap = new Map(providers_json_1.default.map(item => [item.prefix, item]));
function toDigitsOnly(value) {
    return value.replace(/[^0-9]/g, '');
}
function normalizeLocal(value) {
    let cleaned = toDigitsOnly(value);
    if (cleaned.startsWith('62') && cleaned.length >= 10) {
        cleaned = '0' + cleaned.substring(2);
    }
    return cleaned;
}
function extractPrefix(cleaned) {
    if (cleaned.startsWith('08') && cleaned.length >= 10) {
        return cleaned.substring(0, 4);
    }
    return null;
}
function findLocationForPrefix(cleaned, entry) {
    if (!entry || !entry.locations) {
        return null;
    }
    const locations = entry.locations;
    for (const [location, rawRanges] of Object.entries(locations)) {
        const typedRanges = rawRanges;
        for (const range of typedRanges) {
            const length = range.length || String(range.start).length;
            if (cleaned.length < 4 + length) {
                continue;
            }
            const prefixPart = Number(cleaned.substring(4, 4 + length));
            if (prefixPart >= range.start && prefixPart <= range.end) {
                return { location, detail: location };
            }
        }
    }
    return null;
}
function detectProvider(phoneNumber) {
    const result = getProviderDetails(phoneNumber);
    if (typeof result === 'string')
        return result;
    return result.provider;
}
function getProviderDetails(phoneNumber) {
    const cleaned = normalizeLocal(phoneNumber);
    if (cleaned.length < 10 || cleaned.length > 13 || !cleaned.startsWith('08')) {
        return 'Invalid phone number';
    }
    const prefix = extractPrefix(cleaned);
    if (!prefix) {
        return 'Invalid phone number';
    }
    const metadata = providerMap.get(prefix);
    if (!metadata) {
        return 'Unknown provider';
    }
    const hlrPrefixes = (hlr_data_json_1.default.prefixes);
    const entry = hlrPrefixes[prefix];
    const locationInfo = findLocationForPrefix(cleaned, entry);
    return {
        provider: metadata.provider,
        brand: metadata.brand,
        network: metadata.network,
        prefix: metadata.prefix,
        location: locationInfo?.location,
        locationDetail: locationInfo?.detail
    };
}
function detectLocation(phoneNumber) {
    const cleaned = normalizeLocal(phoneNumber);
    if (cleaned.length < 10 || cleaned.length > 13 || !cleaned.startsWith('08')) {
        return 'Invalid phone number';
    }
    const prefix = extractPrefix(cleaned);
    if (!prefix) {
        return 'Invalid phone number';
    }
    const hlrPrefixes = (hlr_data_json_1.default.prefixes);
    const entry = hlrPrefixes[prefix];
    if (!entry) {
        return 'Unknown provider';
    }
    const locationInfo = findLocationForPrefix(cleaned, entry);
    if (!locationInfo) {
        return 'Location not mapped';
    }
    return {
        location: locationInfo.location,
        locationDetail: locationInfo.detail
    };
}
//# sourceMappingURL=index.js.map