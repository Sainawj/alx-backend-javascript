/**
 * Generates a DataView buffer of a specified length and sets a given value at a specific position.
 * @param {Number} length - The size of the buffer.
 * @param {Number} position - The index in the buffer to update.
 * @param {Number} value - The value to store at the specified index.
 * @throws {Error} - If the position is out of bounds.
 * @returns {DataView} - The resulting DataView with the updated value.
 */
export default function initializeInt8Array(length, position, value) {
    if (position >= length) {
      throw new RangeError('Position is out of bounds');
    }
    
    const buffer = new ArrayBuffer(length);
    const dataView = new DataView(buffer);
    dataView.setInt8(position, value);
    
    return dataView;
  }
  