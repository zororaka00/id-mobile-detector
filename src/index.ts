import providersData from './providers.json';

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
}

// Map for faster lookup
const providerMap: Map<string, ProviderMetadata> = new Map(
    providersData.map(item => [item.prefix, item])
);

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
    // Remove non-numeric characters and ensure it's a valid length
    let cleanedNumber = phoneNumber.replace(/[^0-9+]/g, "");  // Allow '+' to be part of number

    // Handle case where the number starts with '+628', change it to '08'
    if (cleanedNumber.startsWith("+628")) {
        cleanedNumber = "08" + cleanedNumber.substring(3);
    }

    // Check if it's a valid phone number length and starts with '08'
    if (cleanedNumber.length < 10 || cleanedNumber.length > 13 || !cleanedNumber.startsWith("08")) {
        return "Invalid phone number";
    }

    // Check prefixes (first 4 digits)
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
