/**
 * In JavaScript objects are really diffrent form Java or other object based languages.
 * The syntax to use it looks more like declaring structs, but the can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function crateUserObject() {
  return {first_name: "Toto", last_name: "Tutu"}
}

/**
 *
 * @param {{first_name: string, last_name:string}} object A user object
 * @return string a concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
    return object.first_name.concat(" ", object.last_name)
}
/**
 *
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two keys (keys, values),
 * each key should contain respectively all original object keys mapped to uppercase,
 * and all original object values mapped to lower case
 */
export function iteratesThroughObjectValuesAndProperties(object) {
    return {
        keys: Object.keys(object).map(key => key.toUpperCase()),
        values: Object.values(object).map(value => value.toLowerCase())
    }
}

/**
 * Return the name of the first younger and last older user in the array
 * @param {array<{name: string, age: number}>} users
 * @return {{younger: string, older: string}}
 */
export function retrieveMaximumMinimumUserAges(users) {
    users.sort((a, b) => a.age - b.age);
    const youngUser = users[0];
    const oldUser = users[users.length - 1];
    return {
        younger: youngUser.name,
        older: oldUser.name,
    };
}

/**
 * In JavaScript, objects can be represented as strings using JSON.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string - The string representing a JSON object.
 * @return {Object} An object retrieved by parsing the input string.
 */
export function parseJavaScriptObjectNotation(string) {
    return JSON.parse(string);
}


/**
 * @param {Object} object
 * @return {string} An string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
    return JSON.stringify(object)
}
