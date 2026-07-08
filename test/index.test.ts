import { detectProvider, getProviderDetails, detectLocation, providersData } from '../src/index';

describe('id-mobile-detector', () => {
  describe('detectProvider', () => {
    it('should detect Telkomsel provider for 0811 prefix', () => {
      expect(detectProvider('08111234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0812 prefix', () => {
      expect(detectProvider('08121234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0813 prefix', () => {
      expect(detectProvider('08131234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0821 prefix', () => {
      expect(detectProvider('08211234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0822 prefix', () => {
      expect(detectProvider('08221234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0823 prefix', () => {
      expect(detectProvider('08231234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0851 prefix', () => {
      expect(detectProvider('08511234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0852 prefix', () => {
      expect(detectProvider('08521234567')).toBe('Telkomsel');
    });

    it('should detect Telkomsel provider for 0853 prefix', () => {
      expect(detectProvider('08531234567')).toBe('Telkomsel');
    });

    it('should detect Indosat provider for 0814 prefix', () => {
      expect(detectProvider('08141234567')).toBe('Indosat');
    });

    it('should detect Indosat provider for 0815 prefix', () => {
      expect(detectProvider('08151234567')).toBe('Indosat');
    });

    it('should detect Indosat provider for 0816 prefix', () => {
      expect(detectProvider('08161234567')).toBe('Indosat');
    });

    it('should detect Indosat provider for 0855 prefix', () => {
      expect(detectProvider('08551234567')).toBe('Indosat');
    });

    it('should detect Indosat provider for 0856 prefix', () => {
      expect(detectProvider('08561234567')).toBe('Indosat');
    });

    it('should detect Indosat provider for 0857 prefix', () => {
      expect(detectProvider('08571234567')).toBe('Indosat');
    });

    it('should detect Indosat provider for 0858 prefix', () => {
      expect(detectProvider('08581234567')).toBe('Indosat');
    });

    it('should detect XL Axiata provider for 0817 prefix', () => {
      expect(detectProvider('08171234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0818 prefix', () => {
      expect(detectProvider('08181234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0819 prefix', () => {
      expect(detectProvider('08191234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0831 prefix', () => {
      expect(detectProvider('08311234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0832 prefix', () => {
      expect(detectProvider('08321234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0833 prefix', () => {
      expect(detectProvider('08331234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0838 prefix', () => {
      expect(detectProvider('08381234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0859 prefix', () => {
      expect(detectProvider('08591234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0877 prefix', () => {
      expect(detectProvider('08771234567')).toBe('XL Axiata');
    });

    it('should detect XL Axiata provider for 0878 prefix', () => {
      expect(detectProvider('08781234567')).toBe('XL Axiata');
    });

    it('should detect Tri provider for 0895 prefix', () => {
      expect(detectProvider('08951234567')).toBe('Tri');
    });

    it('should detect Tri provider for 0896 prefix', () => {
      expect(detectProvider('08961234567')).toBe('Tri');
    });

    it('should detect Tri provider for 0897 prefix', () => {
      expect(detectProvider('08971234567')).toBe('Tri');
    });

    it('should detect Tri provider for 0898 prefix', () => {
      expect(detectProvider('08981234567')).toBe('Tri');
    });

    it('should detect Tri provider for 0899 prefix', () => {
      expect(detectProvider('08991234567')).toBe('Tri');
    });

    it('should detect Smartfren provider for 0881 prefix', () => {
      expect(detectProvider('08811234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0882 prefix', () => {
      expect(detectProvider('08821234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0883 prefix', () => {
      expect(detectProvider('08831234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0884 prefix', () => {
      expect(detectProvider('08841234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0885 prefix', () => {
      expect(detectProvider('08851234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0886 prefix', () => {
      expect(detectProvider('08861234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0887 prefix', () => {
      expect(detectProvider('08871234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0888 prefix', () => {
      expect(detectProvider('08881234567')).toBe('Smartfren');
    });

    it('should detect Smartfren provider for 0889 prefix', () => {
      expect(detectProvider('08891234567')).toBe('Smartfren');
    });

    it('should return "Unknown provider" for invalid prefix', () => {
      expect(detectProvider('08901234567')).toBe('Unknown provider');
    });

    it('should return "Invalid phone number" for too short number', () => {
      expect(detectProvider('0811123')).toBe('Invalid phone number');
    });

    it('should return "Invalid phone number" for number without 08 prefix', () => {
      expect(detectProvider('1234567890')).toBe('Invalid phone number');
    });

    it('should handle number with +62 prefix (normalize)', () => {
      expect(detectProvider('+628111234567')).toBe('Telkomsel');
    });

    it('should handle number with 62 prefix (normalize)', () => {
      expect(detectProvider('628111234567')).toBe('Telkomsel');
    });

    it('should handle number with spaces', () => {
      expect(detectProvider('08 111 234 567')).toBe('Telkomsel');
    });

    it('should handle number with dashes', () => {
      expect(detectProvider('08-111-234-567')).toBe('Telkomsel');
    });

    it('should handle number with parentheses', () => {
      expect(detectProvider('(0811)1234567')).toBe('Telkomsel');
    });
  });

  describe('getProviderDetails', () => {
    it('should return detailed info for Telkomsel 0811', () => {
      const result = getProviderDetails('08111234567');
      expect(typeof result === 'object' && !('location' in result)).toBe(false);
      expect(result).toEqual(
        expect.objectContaining({
          provider: 'Telkomsel',
          brand: 'Kartu HALO',
          network: 'GSM',
          prefix: '0811',
        })
      );
    });

    it('should return detailed info for Telkomsel 0812', () => {
      const result = getProviderDetails('08121234567');
      expect(result).toEqual(
        expect.objectContaining({
          provider: 'Telkomsel',
          brand: 'simPATI',
          network: 'GSM',
          prefix: '0812',
        })
      );
    });

    it('should return detailed info for Indosat 0815', () => {
      const result = getProviderDetails('08151234567');
      expect(result).toEqual(
        expect.objectContaining({
          provider: 'Indosat',
          brand: 'Matrix/Mentari',
          network: 'GSM',
          prefix: '0815',
        })
      );
    });

    it('should return detailed info for XL Axiata 0817', () => {
      const result = getProviderDetails('08171234567');
      expect(result).toEqual(
        expect.objectContaining({
          provider: 'XL Axiata',
          brand: 'XL',
          network: 'GSM',
          prefix: '0817',
        })
      );
    });

    it('should return detailed info for Tri 0895', () => {
      const result = getProviderDetails('08951234567');
      expect(result).toEqual(
        expect.objectContaining({
          provider: 'Tri',
          brand: 'Tri',
          network: 'GSM',
          prefix: '0895',
        })
      );
    });

    it('should return detailed info for Smartfren 0881', () => {
      const result = getProviderDetails('08811234567');
      expect(result).toEqual(
        expect.objectContaining({
          provider: 'Smartfren',
          brand: 'Smartfren',
          network: 'CDMA/4G',
          prefix: '0881',
        })
      );
    });

    it('should return "Invalid phone number" for invalid input', () => {
      const result = getProviderDetails('12345');
      expect(result).toBe('Invalid phone number');
    });

    it('should return "Unknown provider" for unknown prefix', () => {
      const result = getProviderDetails('08901234567');
      expect(result).toBe('Unknown provider');
    });
  });

  describe('detectLocation', () => {
    it('should return location info for valid Jakarta number', () => {
      const result = detectLocation('08111234567');
      expect(result).toHaveProperty('location');
      expect(result).toHaveProperty('locationDetail');
    });

    it('should return location info for valid Bogor number', () => {
      const result = detectLocation('0811111234567');
      expect(result).toHaveProperty('location');
      expect(result).toHaveProperty('locationDetail');
    });

    it('should return "Invalid phone number" for too short number', () => {
      const result = detectLocation('0811123');
      expect(result).toBe('Invalid phone number');
    });

    it('should return "Invalid phone number" for number without 08 prefix', () => {
      const result = detectLocation('1234567890');
      expect(result).toBe('Invalid phone number');
    });
  });

  describe('providersData export', () => {
    it('should export providersData as an array', () => {
      expect(Array.isArray(providersData)).toBe(true);
    });

    it('should contain expected number of providers', () => {
      expect(providersData.length).toBe(40);
    });

    it('should contain Telkomsel providers', () => {
      const telkomselProviders = providersData.filter(p => p.provider === 'Telkomsel');
      expect(telkomselProviders.length).toBeGreaterThan(0);
    });

    it('should contain Indosat providers', () => {
      const indosatProviders = providersData.filter(p => p.provider === 'Indosat');
      expect(indosatProviders.length).toBeGreaterThan(0);
    });

    it('should contain XL Axiata providers', () => {
      const xlProviders = providersData.filter(p => p.provider === 'XL Axiata');
      expect(xlProviders.length).toBeGreaterThan(0);
    });

    it('should contain Tri providers', () => {
      const triProviders = providersData.filter(p => p.provider === 'Tri');
      expect(triProviders.length).toBeGreaterThan(0);
    });

    it('should contain Smartfren providers', () => {
      const smartfrenProviders = providersData.filter(p => p.provider === 'Smartfren');
      expect(smartfrenProviders.length).toBeGreaterThan(0);
    });
  });
});