// Define a mapping of prefixes to providers
const providerPrefixes: { [key: string]: string } = {
    // Telkomsel
    "0811": "Telkomsel",
    "0812": "Telkomsel",
    "0813": "Telkomsel",
    "0821": "Telkomsel",
    "0822": "Telkomsel",
    "0823": "Telkomsel",
    "0852": "Telkomsel",
    "0853": "Telkomsel",
    "0851": "Telkomsel",
    // Indosat Ooredoo
    "0814": "Indosat",
    "0815": "Indosat",
    "0816": "Indosat",
    "0855": "Indosat",
    "0856": "Indosat",
    "0857": "Indosat",
    "0858": "Indosat",
    // XL Axiata
    "0817": "XL",
    "0818": "XL",
    "0819": "XL",
    "0859": "XL",
    "0877": "XL",
    "0878": "XL",
    // Axis
    "0838": "Axis",
    "0831": "Axis",
    "0832": "Axis",
    "0833": "Axis",
    // 3 (Tri)
    "0895": "Tri",
    "0896": "Tri",
    "0897": "Tri",
    "0898": "Tri",
    "0899": "Tri",
    // Smartfren
    "0881": "Smartfren",
    "0882": "Smartfren",
    "0883": "Smartfren",
    "0884": "Smartfren",
    "0885": "Smartfren",
    "0886": "Smartfren",
    "0887": "Smartfren",
    "0888": "Smartfren",
    "0889": "Smartfren"
};

/**
 * Detect provider by phone number.
 * @param phoneNumber - The phone number to detect.
 * @returns The provider name or 'Unknown' if not found.
 */
function detectProvider(phoneNumber: string): string {
    // Remove non-numeric characters and ensure it's a valid length
    var cleanedNumber = phoneNumber.replace(/[^0-9+]/g, "");  // Allow '+' to be part of number

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
    return providerPrefixes[prefix] || "Unknown provider";
}

module.exports = {
    detectProvider
};
