/**
 * Returns a substring of the given string up to a specified length.
 *
 * @param {string} str - The input string.
 * @param {number} length - The desired length of the substring.
 * @return {string} The substring of the input string up to the specified length.
 */
module.exports = function cutString(str, length) {
  if (typeof str !== "string" || typeof length !== "number") {
    return "Input mush be a string and length must be a number!";
  }

  return str.slice(0, length);
};
