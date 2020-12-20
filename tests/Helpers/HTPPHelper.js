/**
 * HTTP Helper Class
 */
import axios from 'axios';

import User from './User';
import Constants from './Constants';

class HTTPHelper {
  async postNewUser() {
    const response = await axios.post(`${Constants.getRegisterURL()}`, {
      name: User.getName(),
      company: User.getCompany(),
      email: User.getEmail(),
      password: User.getPassword(),
      password_conformation: User.getPassword(),
    });
    return response.data;
  }
}

export default new HTTPHelper();
