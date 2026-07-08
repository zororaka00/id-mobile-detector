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

### Function: `getProviderDetails`

Gets detailed provider information including brand, network, prefix, and location.

#### Parameters:
- `phoneNumber` (string): The phone number to detect. It should be a string containing only digits and an optional leading `+` (for international format).

#### Returns:
- `DetectionResult | string`: Detailed provider information including:
  - `provider` (string): The name of the mobile provider
  - `brand` (string, optional): The brand name (e.g., "simPATI", "Kartu HALO")
  - `network` (string, optional): The network type (e.g., "GSM", "CDMA/4G")
  - `prefix` (string, optional): The detected prefix
  - `location` (string, optional): The location/region information
  - `locationDetail` (string, optional): Additional location details
- Returns "Invalid phone number" or "Unknown provider" as string error messages.

### Example:

```typescript
import { getProviderDetails } from 'id-mobile-detector';

const phoneNumber = "081234567890";
const details = getProviderDetails(phoneNumber);

console.log(details);
// Output: {
//   provider: "Telkomsel",
//   brand: "simPATI",
//   network: "GSM",
//   prefix: "0812",
//   location: "Jakarta",
//   locationDetail: "Jakarta"
// }
```

### Function: `detectLocation`

Detects the location/region information for a phone number.

#### Parameters:
- `phoneNumber` (string): The phone number to inspect. It should be a string containing only digits and an optional leading `+` (for international format).

#### Returns:
- `LocationResult | string`: Location information including:
  - `location` (string, optional): The location/region name
  - `locationDetail` (string, optional): Additional location details
- Returns "Invalid phone number", "Unknown provider", or "Location not mapped" as string error messages.

### Example:

```typescript
import { detectLocation } from 'id-mobile-detector';

const phoneNumber = "08111234567";
const location = detectLocation(phoneNumber);

console.log(detectLocation("08111234567")); // Output: { location: "Jakarta", locationDetail: "Jakarta" }
```

### Example (detectProvider):

```typescript
// Valid phone numbers
console.log(detectProvider("081234567890"));  // Output: Telkomsel
console.log(detectProvider("+628123456789")); // Output: Telkomsel

// Invalid phone number (incorrect length)
console.log(detectProvider("0812"));  // Output: Invalid phone number

// Unknown provider
console.log(detectProvider("090000000000"));  // Output: Unknown provider
```

## Interfaces

### `DetectionResult`

```typescript
interface DetectionResult {
  provider: string;
  brand?: string;
  network?: string;
  prefix?: string;
  location?: string;
  locationDetail?: string;
}
```

### `LocationResult`

```typescript
interface LocationResult {
  location?: string;
  locationDetail?: string;
}
```

## Exports

- `providersData` - Array of provider metadata for all supported prefixes
- `DetectionResult` - Interface for detection result
- `LocationResult` - Interface for location result

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