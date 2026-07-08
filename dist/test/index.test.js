"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('id-mobile-detector', () => {
    describe('detectProvider', () => {
        it('should detect Telkomsel provider for 0811 prefix', () => {
            expect((0, index_1.detectProvider)('08111234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0812 prefix', () => {
            expect((0, index_1.detectProvider)('08121234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0813 prefix', () => {
            expect((0, index_1.detectProvider)('08131234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0821 prefix', () => {
            expect((0, index_1.detectProvider)('08211234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0822 prefix', () => {
            expect((0, index_1.detectProvider)('08221234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0823 prefix', () => {
            expect((0, index_1.detectProvider)('08231234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0851 prefix', () => {
            expect((0, index_1.detectProvider)('08511234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0852 prefix', () => {
            expect((0, index_1.detectProvider)('08521234567')).toBe('Telkomsel');
        });
        it('should detect Telkomsel provider for 0853 prefix', () => {
            expect((0, index_1.detectProvider)('08531234567')).toBe('Telkomsel');
        });
        it('should detect Indosat provider for 0814 prefix', () => {
            expect((0, index_1.detectProvider)('08141234567')).toBe('Indosat');
        });
        it('should detect Indosat provider for 0815 prefix', () => {
            expect((0, index_1.detectProvider)('08151234567')).toBe('Indosat');
        });
        it('should detect Indosat provider for 0816 prefix', () => {
            expect((0, index_1.detectProvider)('08161234567')).toBe('Indosat');
        });
        it('should detect Indosat provider for 0855 prefix', () => {
            expect((0, index_1.detectProvider)('08551234567')).toBe('Indosat');
        });
        it('should detect Indosat provider for 0856 prefix', () => {
            expect((0, index_1.detectProvider)('08561234567')).toBe('Indosat');
        });
        it('should detect Indosat provider for 0857 prefix', () => {
            expect((0, index_1.detectProvider)('08571234567')).toBe('Indosat');
        });
        it('should detect Indosat provider for 0858 prefix', () => {
            expect((0, index_1.detectProvider)('08581234567')).toBe('Indosat');
        });
        it('should detect XL Axiata provider for 0817 prefix', () => {
            expect((0, index_1.detectProvider)('08171234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0818 prefix', () => {
            expect((0, index_1.detectProvider)('08181234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0819 prefix', () => {
            expect((0, index_1.detectProvider)('08191234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0831 prefix', () => {
            expect((0, index_1.detectProvider)('08311234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0832 prefix', () => {
            expect((0, index_1.detectProvider)('08321234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0833 prefix', () => {
            expect((0, index_1.detectProvider)('08331234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0838 prefix', () => {
            expect((0, index_1.detectProvider)('08381234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0859 prefix', () => {
            expect((0, index_1.detectProvider)('08591234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0877 prefix', () => {
            expect((0, index_1.detectProvider)('08771234567')).toBe('XL Axiata');
        });
        it('should detect XL Axiata provider for 0878 prefix', () => {
            expect((0, index_1.detectProvider)('08781234567')).toBe('XL Axiata');
        });
        it('should detect Tri provider for 0895 prefix', () => {
            expect((0, index_1.detectProvider)('08951234567')).toBe('Tri');
        });
        it('should detect Tri provider for 0896 prefix', () => {
            expect((0, index_1.detectProvider)('08961234567')).toBe('Tri');
        });
        it('should detect Tri provider for 0897 prefix', () => {
            expect((0, index_1.detectProvider)('08971234567')).toBe('Tri');
        });
        it('should detect Tri provider for 0898 prefix', () => {
            expect((0, index_1.detectProvider)('08981234567')).toBe('Tri');
        });
        it('should detect Tri provider for 0899 prefix', () => {
            expect((0, index_1.detectProvider)('08991234567')).toBe('Tri');
        });
        it('should detect Smartfren provider for 0881 prefix', () => {
            expect((0, index_1.detectProvider)('08811234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0882 prefix', () => {
            expect((0, index_1.detectProvider)('08821234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0883 prefix', () => {
            expect((0, index_1.detectProvider)('08831234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0884 prefix', () => {
            expect((0, index_1.detectProvider)('08841234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0885 prefix', () => {
            expect((0, index_1.detectProvider)('08851234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0886 prefix', () => {
            expect((0, index_1.detectProvider)('08861234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0887 prefix', () => {
            expect((0, index_1.detectProvider)('08871234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0888 prefix', () => {
            expect((0, index_1.detectProvider)('08881234567')).toBe('Smartfren');
        });
        it('should detect Smartfren provider for 0889 prefix', () => {
            expect((0, index_1.detectProvider)('08891234567')).toBe('Smartfren');
        });
        it('should return "Unknown provider" for invalid prefix', () => {
            expect((0, index_1.detectProvider)('08901234567')).toBe('Unknown provider');
        });
        it('should return "Invalid phone number" for too short number', () => {
            expect((0, index_1.detectProvider)('0811123')).toBe('Invalid phone number');
        });
        it('should return "Invalid phone number" for number without 08 prefix', () => {
            expect((0, index_1.detectProvider)('1234567890')).toBe('Invalid phone number');
        });
        it('should handle number with +62 prefix (normalize)', () => {
            expect((0, index_1.detectProvider)('+628111234567')).toBe('Telkomsel');
        });
        it('should handle number with 62 prefix (normalize)', () => {
            expect((0, index_1.detectProvider)('628111234567')).toBe('Telkomsel');
        });
        it('should handle number with spaces', () => {
            expect((0, index_1.detectProvider)('08 111 234 567')).toBe('Telkomsel');
        });
        it('should handle number with dashes', () => {
            expect((0, index_1.detectProvider)('08-111-234-567')).toBe('Telkomsel');
        });
        it('should handle number with parentheses', () => {
            expect((0, index_1.detectProvider)('(0811)1234567')).toBe('Telkomsel');
        });
    });
    describe('getProviderDetails', () => {
        it('should return detailed info for Telkomsel 0811', () => {
            const result = (0, index_1.getProviderDetails)('08111234567');
            expect(typeof result === 'object' && !('location' in result)).toBe(false);
            expect(result).toEqual(expect.objectContaining({
                provider: 'Telkomsel',
                brand: 'Kartu HALO',
                network: 'GSM',
                prefix: '0811',
            }));
        });
        it('should return detailed info for Telkomsel 0812', () => {
            const result = (0, index_1.getProviderDetails)('08121234567');
            expect(result).toEqual(expect.objectContaining({
                provider: 'Telkomsel',
                brand: 'simPATI',
                network: 'GSM',
                prefix: '0812',
            }));
        });
        it('should return detailed info for Indosat 0815', () => {
            const result = (0, index_1.getProviderDetails)('08151234567');
            expect(result).toEqual(expect.objectContaining({
                provider: 'Indosat',
                brand: 'Matrix/Mentari',
                network: 'GSM',
                prefix: '0815',
            }));
        });
        it('should return detailed info for XL Axiata 0817', () => {
            const result = (0, index_1.getProviderDetails)('08171234567');
            expect(result).toEqual(expect.objectContaining({
                provider: 'XL Axiata',
                brand: 'XL',
                network: 'GSM',
                prefix: '0817',
            }));
        });
        it('should return detailed info for Tri 0895', () => {
            const result = (0, index_1.getProviderDetails)('08951234567');
            expect(result).toEqual(expect.objectContaining({
                provider: 'Tri',
                brand: 'Tri',
                network: 'GSM',
                prefix: '0895',
            }));
        });
        it('should return detailed info for Smartfren 0881', () => {
            const result = (0, index_1.getProviderDetails)('08811234567');
            expect(result).toEqual(expect.objectContaining({
                provider: 'Smartfren',
                brand: 'Smartfren',
                network: 'CDMA/4G',
                prefix: '0881',
            }));
        });
        it('should return "Invalid phone number" for invalid input', () => {
            const result = (0, index_1.getProviderDetails)('12345');
            expect(result).toBe('Invalid phone number');
        });
        it('should return "Unknown provider" for unknown prefix', () => {
            const result = (0, index_1.getProviderDetails)('08901234567');
            expect(result).toBe('Unknown provider');
        });
    });
    describe('detectLocation', () => {
        it('should return location info for valid Jakarta number', () => {
            const result = (0, index_1.detectLocation)('08111234567');
            expect(result).toHaveProperty('location');
            expect(result).toHaveProperty('locationDetail');
        });
        it('should return location info for valid Bogor number', () => {
            const result = (0, index_1.detectLocation)('0811111234567');
            expect(result).toHaveProperty('location');
            expect(result).toHaveProperty('locationDetail');
        });
        it('should return "Invalid phone number" for too short number', () => {
            const result = (0, index_1.detectLocation)('0811123');
            expect(result).toBe('Invalid phone number');
        });
        it('should return "Invalid phone number" for number without 08 prefix', () => {
            const result = (0, index_1.detectLocation)('1234567890');
            expect(result).toBe('Invalid phone number');
        });
    });
    describe('providersData export', () => {
        it('should export providersData as an array', () => {
            expect(Array.isArray(index_1.providersData)).toBe(true);
        });
        it('should contain expected number of providers', () => {
            expect(index_1.providersData.length).toBe(40);
        });
        it('should contain Telkomsel providers', () => {
            const telkomselProviders = index_1.providersData.filter(p => p.provider === 'Telkomsel');
            expect(telkomselProviders.length).toBeGreaterThan(0);
        });
        it('should contain Indosat providers', () => {
            const indosatProviders = index_1.providersData.filter(p => p.provider === 'Indosat');
            expect(indosatProviders.length).toBeGreaterThan(0);
        });
        it('should contain XL Axiata providers', () => {
            const xlProviders = index_1.providersData.filter(p => p.provider === 'XL Axiata');
            expect(xlProviders.length).toBeGreaterThan(0);
        });
        it('should contain Tri providers', () => {
            const triProviders = index_1.providersData.filter(p => p.provider === 'Tri');
            expect(triProviders.length).toBeGreaterThan(0);
        });
        it('should contain Smartfren providers', () => {
            const smartfrenProviders = index_1.providersData.filter(p => p.provider === 'Smartfren');
            expect(smartfrenProviders.length).toBeGreaterThan(0);
        });
    });
});
//# sourceMappingURL=index.test.js.map