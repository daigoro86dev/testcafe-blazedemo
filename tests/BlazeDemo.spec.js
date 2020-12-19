import Constants from './Helpers/Constants';
import HomePage from './PageObjectModels/HomePage';
import RegisterPage from './PageObjectModels/RegisterPage';

fixture`BlazemeterDemo`.page`${Constants.getBaseURL()}`;

test.page`${Constants.getRegisterURL()}`('Registration Test', async (t) => {
  await RegisterPage.registerUser();
  await t
    .expect(HomePage.getPanelBody().textContent)
    .contains(Constants.getLoggedInConfirmationMsg());
});

// test.page`${Constants.getLoginURL()}`('Login Test', async (t) => {});