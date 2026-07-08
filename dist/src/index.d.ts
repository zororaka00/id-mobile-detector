import providersData from './providers.json';
export interface ProviderMetadata {
    prefix: string;
    provider: string;
    brand: string;
    network: string;
}
export interface DetectionResult {
    provider: string;
    brand?: string;
    network?: string;
    prefix?: string;
    location?: string;
    locationDetail?: string;
}
export declare function detectProvider(phoneNumber: string): string;
export declare function getProviderDetails(phoneNumber: string): DetectionResult | string;
export interface LocationResult {
    location?: string;
    locationDetail?: string;
}
export declare function detectLocation(phoneNumber: string): LocationResult | string;
export { providersData };
//# sourceMappingURL=index.d.ts.map