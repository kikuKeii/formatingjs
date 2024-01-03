/**
 * Joins all elements of an array into a single string with spaces in between.
 *
 * @param {Array} arr - The array to be joined.
 * @return {String} The joined string.
 */
module.exports = function joinString(arr) {
  if (!Array.isArray(arr)) {
    return "Input mush be an array!";
  }

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];

    // Add space between elements, except for the last element
    if (i < arr.length - 1) {
      result += " ";
    }
  }

  return result;
};
