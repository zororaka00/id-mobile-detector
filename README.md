# id-mobile-detector

A lightweight TypeScript library for detecting Indonesian mobile providers based on phone number prefixes.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install id-mobile-detector
```

## Usage

You can use this library to detect the mobile provider of a phone number by simply passing the phone number as a string.

### Example

```typescript
import { detectProvider } from 'id-mobile-detector';

// Example usage
const phoneNumber = "081234567890";  // Telkomsel number
const provider = detectProvider(phoneNumber);

console.log(provider);  // Output: Telkomsel
```

### Function: `detectProvider`

Detects the provider based on the phone number prefix.

#### Parameters:
- `phoneNumber` (string): The phone number to detect. It should be a string containing only digits and an optional leading `+` (for international format).

#### Returns:
- `string`: The name of the mobile provider (e.g., "Telkomsel", "Indosat", "XL", etc.), or "Unknown provider" if the provider is not found. If the phone number is invalid, it returns "Invalid phone number".

### Example:

```typescript
// Valid phone numbers
console.log(detectProvider("081234567890"));  // Output: Telkomsel
console.log(detectProvider("+628123456789")); // Output: Telkomsel

// Invalid phone number (incorrect length)
console.log(detectProvider("0812"));  // Output: Invalid phone number

// Unknown provider
console.log(detectProvider("090000000000"));  // Output: Unknown provider
```

## Prefix Mapping

The library uses a predefined mapping of phone number prefixes to Indonesian mobile providers:

- **Telkomsel**: 0811, 0812, 0813, 0821, 0822, 0823, 0852, 0853, 0851
- **Indosat Ooredoo**: 0814, 0815, 0816, 0855, 0856, 0857, 0858
- **XL Axiata**: 0817, 0818, 0819, 0859, 0877, 0878
- **Axis**: 0838, 0831, 0832, 0833
- **Tri**: 0895, 0896, 0897, 0898, 0899
- **Smartfren**: 0881, 0882, 0883, 0884, 0885, 0886, 0887, 0888, 0889

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests if you want to contribute improvements or bug fixes.