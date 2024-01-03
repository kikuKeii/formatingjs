/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @return {string} The reversed string.
 */
module.exports = function reverseString(str) {
  if (typeof str !== "string") {
    return "Input mush be a string!";
  }

  return str.split("").reverse().join("");
};
