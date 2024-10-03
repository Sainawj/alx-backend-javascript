import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
   * Initializes a new instance of the SkyHighBuilding class.
   *
   * @param {number} sqft - The total square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft); // Calls the parent class (Building) constructor to initialize sqft.
    this.floors = floors; // Initializes the number of floors in the building.
  }

  /**
   * Retrieves the number of floors in the building.
   *
   * @returns {number} - The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Updates the number of floors in the building.
   *
   * @param {number} value - The new number of floors.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Generates and returns an evacuation warning message.
   *
   * @returns {string} - The evacuation warning message for the building.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
