export default class HolbertonClass {
    /**
     * Initializes a new instance of the HolbertonClass.
     *
     * @param {number} size - The size of the class.
     * @param {string} location - The location of the class.
     */
    constructor(size, location) {
      this.size = size; // Initializes the class size.
      this.location = location; // Initializes the class location.
    }
  
    /**
     * Retrieves the size of the class.
     *
     * @returns {number} - The size of the class.
     */
    get size() {
      return this._size;
    }
  
    /**
     * Updates the size of the class.
     *
     * @param {number} value - The new size of the class.
     */
    set size(value) {
      this._size = value;
    }
  
    /**
     * Retrieves the location of the class.
     *
     * @returns {string} - The location of the class.
     */
    get location() {
      return this._location;
    }
  
    /**
     * Updates the location of the class.
     *
     * @param {string} value - The new location of the class.
     */
    set location(value) {
      this._location = value;
    }
  
    /**
     * Customizes the behavior when the object is converted to a primitive value.
     * 
     * @param {string} hint - A hint provided to determine the type of conversion ('string', 'number', or 'default').
     * @returns {number|string|object} - Returns the size when the hint is 'number', the location when the hint is 'string', or the object itself for default behavior.
     */
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return this.size; // Return the size for numeric conversions.
      }
      if (hint === 'string') {
        return this.location; // Return the location for string conversions.
      }
      return this; // Return the object itself for default conversions.
    }
  }
  