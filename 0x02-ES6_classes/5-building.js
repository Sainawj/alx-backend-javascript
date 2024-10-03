export default class Building {
    /**
     * Initializes a new instance of the Building class.
     * 
     * @param {number} sqft - The size of the building in square feet.
     */
    constructor(sqft) {
      this.sqft = sqft;
      // Ensure that if the class is extended, the subclass must implement the evacuationWarningMessage method.
      if (this.constructor !== Building) {
        if (typeof this.evacuationWarningMessage !== 'function') {
          throw new Error(
            'Any class extending Building must implement evacuationWarningMessage',
          );
        }
      }
    }
  
    /**
     * Retrieves the square footage of the building.
     */
    get sqft() {
      return this._sqft;
    }
  
    /**
     * Updates the square footage of the building.
     * @param {number} value - The new size of the building in square feet.
     */
    set sqft(value) {
      this._sqft = value;
    }
  }
  