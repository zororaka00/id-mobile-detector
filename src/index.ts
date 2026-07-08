import providersData from './providers.json';
import hlrData from './hlr-data.json';

type RangeEntry = { start: number; end: number; length: number };
type PrefixEntry = {
   provider: string;
   locations: Record<string, RangeEntry[]>;
};

/**
 * Interface for Provider Metadata
 */
export interface ProviderMetadata {
    prefix: string;
    provider: string;
    brand: string;
    network: string;
}

/**
 * Interface for Detection Result
 */
export interface DetectionResult {
     provider: string;
     brand?: string;
     network?: string;
     prefix?: string;
     location?: string;
     locationDetail?: string;
 }

// Map for faster lookup
const providerMap: Map<string, ProviderMetadata> = new Map(
    providersData.map(item => [item.prefix, item])
);

function toDigitsOnly(value: string): string {
    return value.replace(/[^0-9]/g, '');
}

function normalizeLocal(value: string): string {
    let cleaned = toDigitsOnly(value);
    if (cleaned.startsWith('62') && cleaned.length >= 10) {
        cleaned = '0' + cleaned.substring(2);
    }
    return cleaned;
}

function extractPrefix(cleaned: string): string | null {
    if (cleaned.startsWith('08') && cleaned.length >= 10) {
        return cleaned.substring(0, 4);
    }
    return null;
}

function findLocationForPrefix(cleaned: string, entry: PrefixEntry | undefined): { location: string; detail: string } | null {
    if (!entry || !entry.locations) {
        return null;
    }

    const locations = entry.locations;
    for (const [location, rawRanges] of Object.entries(locations)) {
        const typedRanges: RangeEntry[] = rawRanges as RangeEntry[];
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

/**
 * Detect provider by phone number.
 * @param phoneNumber - The phone number to detect.
 * @returns The provider name or 'Unknown' if not found.
 */
export function detectProvider(phoneNumber: string): string {
    const result = getProviderDetails(phoneNumber);
    if (typeof result === 'string') return result;
    return result.provider;
}

/**
 * Get detailed provider information by phone number.
 * @param phoneNumber - The phone number to detect.
 * @returns Detailed provider information or error message.
 */
export function getProviderDetails(phoneNumber: string): DetectionResult | string {
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

    const hlrPrefixes = ((hlrData as any).prefixes) as Record<string, PrefixEntry>;
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

export interface LocationResult {
     location?: string;
     locationDetail?: string;
 }

/**
 * Get possible location details for a phone number.
 * @param phoneNumber - The phone number to inspect.
 * @returns Location information when available.
 */
export function detectLocation(phoneNumber: string): LocationResult | string {
    const cleaned = normalizeLocal(phoneNumber);

    if (cleaned.length < 10 || cleaned.length > 13 || !cleaned.startsWith('08')) {
        return 'Invalid phone number';
    }

    const prefix = extractPrefix(cleaned);
    if (!prefix) {
        return 'Invalid phone number';
    }

    const hlrPrefixes = ((hlrData as any).prefixes) as Record<string, PrefixEntry>;
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

export { providersData };
