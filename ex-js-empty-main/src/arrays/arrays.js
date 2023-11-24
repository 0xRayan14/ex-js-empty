/**
 * @param {array<string>} array An array containing words and sentences
 * @return {array<string>} An array with all words isolated, and with empty strings removed
 */
export function splitAllStringsByWordAndFilterEmptyOnes(array) {
    return array.flatMap((str) => str.split(/\s+/).filter((word) => word !== ''));
}


/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @return {*[]} return an array containing all elements from the two given arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function concatenateArrays(array1, array2) {
    return [...array1, ...array2]
}

/**
 * @param {array} array An array of arbitrary elements
 * @param {number} index Where you need to replace the element in the array
 * @param {...*} newElements New elements to replace at the given index
 * @return {array<*>} A new array, sorted, the original array should not be modified
 */
export function replaceElementsInArrayAtAGivenPlace(array, index, ...newElements) {
    const newArray = [...array];
    newArray.splice(index, newElements.length, ...newElements);
    return newArray;
}
