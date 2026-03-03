"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviderDetails = exports.detectProvider = void 0;
const providers_json_1 = __importDefault(require("./providers.json"));
const providerMap = new Map(providers_json_1.default.map(item => [item.prefix, item]));
function detectProvider(phoneNumber) {
    const result = getProviderDetails(phoneNumber);
    if (typeof result === 'string')
        return result;
    return result.provider;
}
exports.detectProvider = detectProvider;
function getProviderDetails(phoneNumber) {
    let cleanedNumber = phoneNumber.replace(/[^0-9+]/g, "");
    if (cleanedNumber.startsWith("+628")) {
        cleanedNumber = "08" + cleanedNumber.substring(3);
    }
    if (cleanedNumber.length < 10 || cleanedNumber.length > 13 || !cleanedNumber.startsWith("08")) {
        return "Invalid phone number";
    }
    const prefix = cleanedNumber.substring(0, 4);
    const metadata = providerMap.get(prefix);
    if (metadata) {
        return {
            provider: metadata.provider,
            brand: metadata.brand,
            network: metadata.network,
            prefix: metadata.prefix
        };
    }
    return "Unknown provider";
}
exports.getProviderDetails = getProviderDetails;
//# sourceMappingURL=index.js.map