export default class Airport {
    /**
     * Initializes a new instance of the Airport class.
     *
     * @param {string} name - The name of the airport.
     * @param {string} code - The IATA code of the airport.
     */
    constructor(name, code) {
      this.name = name; // Initializes the airport name.
      this.code = code; // Initializes the airport IATA code.
    }
  
    /**
     * Retrieves the name of the airport.
     *
     * @returns {string} - The name of the airport.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Updates the name of the airport.
     *
     * @param {string} value - The new name of the airport.
     */
    set name(value) {
      this._name = value;
    }
  
    /**
     * Retrieves the IATA code of the airport.
     *
     * @returns {string} - The IATA code of the airport.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Updates the IATA code of the airport.
     *
     * @param {string} value - The new IATA code of the airport.
     */
    set code(value) {
      this._code = value;
    }
  
    /**
     * Customizes the string representation of the Airport object.
     * 
     * @returns {string} - The IATA code of the airport when the object is converted to a string.
     */
    get [Symbol.toStringTag]() {
      return this._code;
    }
  }
  