import Car from './10-car'; // Importing the Car class

// Represents an electric vehicle (EV) car that extends the Car class
export default class EVCar extends Car {
  /**
   * Initializes a new instance of EVCar.
   * 
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor the car uses.
   * @param {string} color - The color of the car.
   * @param {number} range - The range of the car in miles/kilometers.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this.range = range; // Store the range of the EV
  }

  /**
   * Retrieves the range of the EV.
   * 
   * @returns {number} - The range of the EV.
   */
  get range() {
    return this._range;
  }

  /**
   * Sets the range of the EV.
   * 
   * @param {number} value - The new range of the EV.
   */
  set range(value) {
    this._range = value;
  }

  /**
   * Creates a new instance of the car, cloning the current car instance.
   * 
   * @returns {Car} - A new instance of the car.
   */
  cloneCar() {
    const Species = super.constructor[Symbol.species]; // Access the species constructor for cloning

    return new Species(); // Return a new instance of the species (Car)
  }
}
