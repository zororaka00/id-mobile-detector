"use strict";
const providerPrefixes = {
    "0811": "Telkomsel",
    "0812": "Telkomsel",
    "0813": "Telkomsel",
    "0821": "Telkomsel",
    "0822": "Telkomsel",
    "0823": "Telkomsel",
    "0852": "Telkomsel",
    "0853": "Telkomsel",
    "0851": "Telkomsel",
    "0814": "Indosat",
    "0815": "Indosat",
    "0816": "Indosat",
    "0855": "Indosat",
    "0856": "Indosat",
    "0857": "Indosat",
    "0858": "Indosat",
    "0817": "XL",
    "0818": "XL",
    "0819": "XL",
    "0859": "XL",
    "0877": "XL",
    "0878": "XL",
    "0838": "Axis",
    "0831": "Axis",
    "0832": "Axis",
    "0833": "Axis",
    "0895": "Tri",
    "0896": "Tri",
    "0897": "Tri",
    "0898": "Tri",
    "0899": "Tri",
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
function detectProvider(phoneNumber) {
    var cleanedNumber = phoneNumber.replace(/[^0-9+]/g, "");
    if (cleanedNumber.startsWith("+628")) {
        cleanedNumber = "08" + cleanedNumber.substring(3);
    }
    if (cleanedNumber.length < 10 || cleanedNumber.length > 13 || !cleanedNumber.startsWith("08")) {
        return "Invalid phone number";
    }
    const prefix = cleanedNumber.substring(0, 4);
    return providerPrefixes[prefix] || "Unknown provider";
}
module.exports = {
    detectProvider
};
//# sourceMappingURL=index.js.map