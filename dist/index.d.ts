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
}
export declare function detectProvider(phoneNumber: string): string;
export declare function getProviderDetails(phoneNumber: string): DetectionResult | string;
//# sourceMappingURL=index.d.ts.map