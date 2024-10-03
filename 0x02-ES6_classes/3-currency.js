export default class Currency {
    /**
     * Initializes a new instance of Currency.
     *
     * @param {String} code - The currency code (e.g., USD, EUR).
     * @param {String} name - The currency name (e.g., Dollar, Euro).
     */
    constructor(code, name) {
      this.code = code;
      this.name = name;
    }
  
    /**
     * Retrieves the currency code.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Sets the currency code.
     */
    set code(value) {
      this._code = value;
    }
  
    /**
     * Retrieves the currency name.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Sets the currency name.
     */
    set name(value) {
      this._name = value;
    }
  
    /**
     * Returns the full string representation of the currency.
     * @returns {String} - The full representation (e.g., Dollar (USD)).
     */
    displayFullCurrency() {
      return `${this.name} (${this.code})`;
    }
  }
  