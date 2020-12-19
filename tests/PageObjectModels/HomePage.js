/**
 * Home page class
 */
import { Selector } from 'testcafe';

class HomePage {
  /**
   * @constructor
   */
  constructor() {
    this.panelHeading = Selector('.panel-heading');
    this.panelBody = Selector('.panel-body');
  }
  /**
   * @method
   * @name getPanelBody
   */
  getPanelBody() {
    return this.panelBody;
  }
}

export default new HomePage();
