/**
 * Replaces all occurrences of a string in a given long string.
 *
 * @param {string} longString - The long string in which to replace occurrences.
 * @param {string} str - The string to be replaced.
 * @param {string} str2 - The replacement string.
 * @param {boolean} findAll - Optional. Determines whether to replace all occurrences or just the first one. Defaults to true.
 * @returns {string} - The long string with all occurrences of the specified string replaced.
 */
module.exports = function replaceString(longString, str, str2, findAll = true) {
  if (typeof str !== "string" || typeof str2 !== "string") {
    return "Input mush be a string!";
  }
  if (!findAll) {
    return longString.replace(str, str2);
  }
  return longString.replace(new RegExp(`${str}`, "g"), str2);
};
