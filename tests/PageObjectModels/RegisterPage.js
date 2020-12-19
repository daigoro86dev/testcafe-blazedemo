/**
 * Register page class
 */
import { Selector, t } from 'testcafe';
import User from '../Helpers/User';

class RegisterPage {
  /**
   * @constructor
   */
  constructor() {
    this.nameInput = Selector('#name');
    this.companyInput = Selector('#company');
    this.emailInput = Selector('#email');
    this.passwordInput = Selector('#password');
    this.passwordConfirmInput = Selector('#password-confirm');
    this.registerButton = Selector('.btn.btn-primary').withText('Register');
  }
  /**
   * @method
   * @name registerUser
   * @description Register user using registration form
   */
  async registerUser() {
    await t.typeText(this.nameInput, User.getName());
    await t.typeText(this.companyInput, User.getCompany());
    await t.typeText(this.emailInput, User.getEmail());
    await t.typeText(this.passwordInput, User.getPassword());
    await t.typeText(this.passwordConfirmInput, User.getPassword());
    await t.click(this.registerButton);
  }
}

export default new RegisterPage();
