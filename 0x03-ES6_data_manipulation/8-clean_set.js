/**
 * Concatenates elements of a set into a string, removing a specified prefix from each item and joining the remaining parts with a dash.
 * @param {Set<String>} set - A set containing string elements.
 * @param {String} startString - The prefix to remove from the start of each string.
 * @returns {String} - A dash-separated string of the processed set elements, or an empty string if conditions are not met.
 */
export default function formatSetWithoutPrefix(set, prefix) {
    if (!(set instanceof Set) || typeof prefix !== 'string' || !set.size || !prefix) {
      return '';
    }
  
    const result = [...set]
      .filter(item => typeof item === 'string' && item.startsWith(prefix))
      .map(item => item.slice(prefix.length))
      .filter(subStr => subStr) // Exclude empty strings after slicing
      .join('-');
  
    return result;
  }
  