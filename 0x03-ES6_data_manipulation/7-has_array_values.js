/**
 * Verifies if all elements in an array exist within a given set.
 * @param {Set} set - The set to check for the presence of items.
 * @param {Array} array - The array containing elements to check against the set.
 * @returns {Boolean} - Returns true if all elements in the array are found in the set, otherwise false.
 */
export default function areAllArrayValuesInSet(set, arr) {
    return arr.every(item => set.has(item));
  }
  