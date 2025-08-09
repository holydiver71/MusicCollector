// Utility to load language resources based on browser locale
// Follows Microsoft C# coding style and SOLID principles

import enGB from "./en-GB.json";
import frFR from "./fr-FR.json";

/**
 * Supported language packs mapped by locale.
 */
const languagePacks: Record<string, typeof enGB> = {
    "en-GB": enGB,
    "fr-FR": frFR
};

/**
 * Gets the user's browser locale.
 * @returns Locale string (e.g., "en-GB")
 */
function getBrowserLocale(): string {
    if (typeof navigator !== "undefined" && navigator.language) {
        return navigator.language;
    }
    return "en-GB";
}

/**
 * Loads the appropriate language pack based on browser locale.
 * Defaults to English UK if not defined.
 * @returns Language resource object
 */
export function getLanguageResources(): typeof enGB {
    const locale = getBrowserLocale();
    return languagePacks[locale] || enGB;
}
