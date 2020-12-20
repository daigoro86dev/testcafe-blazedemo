/**
 * Register page class
 */
import User from '../Helpers/User';
import Page from './Page';

class RegisterPage {
  /**
   * @constructor
   */
  constructor() {
    this.nameInput = Page.getElement('#name');
    this.companyInput = Page.getElement('#company');
    this.emailInput = Page.getElement('#email');
    this.passwordInput = Page.getElement('#password');
    this.passwordConfirmInput = Page.getElement('#password-confirm');
    this.registerButton = Page.getElement('.btn.btn-primary').withText(
      'Register'
    );
  }
  /**
   * @method
   * @name registerUser
   * @description Register user using registration form
   */
  async registerUser() {
    await Page.typeInput(this.nameInput, User.getName());
    await Page.typeInput(this.companyInput, User.getCompany());
    await Page.typeInput(this.emailInput, User.getEmail());
    await Page.typeInput(this.passwordInput, User.getPassword());
    await Page.typeInput(this.passwordConfirmInput, User.getPassword());
    await Page.clickElement(this.registerButton);
  }
}

export default new RegisterPage();
