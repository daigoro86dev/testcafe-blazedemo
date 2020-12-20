import Constants from './Helpers/Constants';
import HomePage from './PageObjectModels/HomePage';
import RegisterPage from './PageObjectModels/RegisterPage';
import HTTPHelper from './Helpers/HTPPHelper';

fixture`BlazemeterDemo`.page`${Constants.getBaseURL()}`;

test.page`${Constants.getRegisterURL()}`('Registration Test', async (t) => {
  // await RegisterPage.registerUser();
  // await HomePage.assertPanelBodyText();
  await HTTPHelper.postNewUser();
});

// test.page`${Constants.getLoginURL()}`('Login Test', async (t) => {});
