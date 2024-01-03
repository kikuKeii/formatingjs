/**
 * Count the number of characters in a given string.
 *
 * @param {string} str - The input string to count characters from.
 * @return {number} The number of characters in the string.
 */
module.exports = function countCharacters(str) {
  if (typeof str !== "string") {
    return "Input mush be a string!";
  }

  return str.length;
};
