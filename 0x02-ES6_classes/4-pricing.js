import Currency from './3-currency';

export default class Pricing {
  /**
   * Initializes a new instance of Pricing.
   *
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency of the price.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Retrieves the amount of the price.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Updates the amount of the price.
   * @param {number} value - The new price amount.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Retrieves the currency of the price.
   * @returns {Currency}
   */
  get currency() {
    return this._currency;
  }

  /**
   * Updates the currency of the price.
   * @param {Currency} value - The new currency object.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  /**
   * Displays the full price with the amount and currency details.
   * @returns {string}
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts a price based on a given conversion rate.
   * @param {number} amount - The price to be converted.
   * @param {number} conversionRate - The rate to be applied.
   * @returns {number} - The converted price.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
