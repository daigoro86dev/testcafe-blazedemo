/**
 * @description Constants utility class
 */
class Constants {
  /**
   * @description Literal values
   */
  baseURL = 'https://blazedemo.com';
  /**
   * @method
   * @name getBaseUrl
   * @description Returns base URL
   */
  getBaseURL() {
    return this.baseURL;
  }
  /**
   * @method
   * @name getLoginURL
   * @description Returns baseURL/login
   */
  getLoginURL() {
    return `${this.getBaseURL()}/login`;
  }
  /**
   * @method
   * @name getRegisterURL
   * @description Returns baseURL/register
   */
  getRegisterURL() {
    return `${this.getBaseURL()}/register`;
  }
  /**
   * @method
   * @name getLoggedInConfirmationMsg
   * @description Expected message upon log in / registration
   */
  getLoggedInConfirmationMsg() {
    return 'You are logged in!';
  }
}

export default new Constants();
