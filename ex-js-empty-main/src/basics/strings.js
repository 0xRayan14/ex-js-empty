/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} true if n is bigger than 2
 */

/**
 * Find and replace in the provided string, but preserving case.
 * If the new word is longer than the replaced one, ignore tail characters.
 * @param {string} needle - The word to find.
 * @param {string} haystack - The string to search and replace within.
 * @param {string} newWord - The word to replace `needle` with.
 * @return {string} The modified string.
 * @throws {Error} If `newWord` is not a non-empty string.
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
    // Check if newWord is a non-empty string
    if (isNaN(newWord)) {
        throw new Error("a")
    }
    if (typeof newWord !== 'string' || newWord.length === 0) {
        throw new Error('newWord must be a non-empty string');
    }

    // Regular expression to match the needle with case insensitivity
    const regex = new RegExp(needle, 'gi');

    // Replace the matched word with the newWord
    return haystack.replace(regex, (match) => {
        // Preserve the case of the original word
        if (match[0] === match[0].toUpperCase()) {
            return newWord.charAt(0).toUpperCase() + newWord.slice(1);
        } else {
            return newWord.toLowerCase();
        }
    });
}
