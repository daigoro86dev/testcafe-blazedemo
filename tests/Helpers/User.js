import { company, internet } from 'faker';

/**
 * @description User utility class
 */
class User {
  /**
   * @constructor
   */
  constructor() {
    this.name = internet.userName();
    this.company = company.companyName();
    this.email = internet.email();
    this.password = internet.password();
  }
  /**
   * @method
   * @name getName
   */
  getName() {
    return this.name;
  }
  /**
   * @method
   * @name getCompany
   */
  getCompany() {
    return this.company;
  }
  /**
   * @method
   * @name getEmail
   */
  getEmail() {
    return this.email;
  }
  /**
   * @method
   * @name getPassword
   */
  getPassword() {
    return this.password;
  }
}

export default new User();
