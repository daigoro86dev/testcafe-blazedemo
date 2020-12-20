/**
 * Base page class
 */
import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.Selector = Selector;
    this.t = t;
  }
  /**
   * @method
   * @name getElement
   * @param {string} element
   * @description Return selected element
   */
  getElement(element = '') {
    return this.Selector(element);
  }
  /**
   * @method
   * @name clickElement
   * @param {string} element
   * @description Click the selected element
   */
  async clickElement(element = '') {
    await this.t.click(element);
  }
  /**
   * @method
   * @name typeInput
   * @param {string} inputField
   * @param {string} inputValue
   * @description Fill the input field with the input value
   */
  async typeInput(inputField = '', inputValue = '') {
    await this.t.typeText(inputField, inputValue);
  }
  /**
   * @method
   * @name assertElementText
   * @param {string} element
   * @param {string} elementText
   * @description Assert the expected text value within element
   */
  async assertElementText(element = '', elementText = '') {
    await this.t
      .expect(this.getElement(element).textContent)
      .contains(elementText);
  }
}

export default new Page();
