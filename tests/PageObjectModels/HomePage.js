/**
 * Home page class
 */

import { t } from 'testcafe';
import Constants from '../Helpers/Constants';
import Page from './Page';

class HomePage {
  /**
   * @constructor
   */
  constructor() {
    this.panelHeading = Page.getElement('.panel-heading');
    this.panelBody = Page.getElement('.panel-body');
  }
  /**
   * @method
   * @name getPanelBody
   */
  getPanelBody() {
    return this.panelBody;
  }
  /**
   * @method
   * @name assertPanelBody
   * @description Asserts panel body text based on constant literal value
   */
  async assertPanelBodyText() {
    await Page.assertElementText(
      this.panelBody,
      Constants.getLoggedInConfirmationMsg()
    );
  }
}

export default new HomePage();
