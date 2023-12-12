import { expect } from '@wdio/globals'
import JayHomePage from '../jayPageObjects/jay.home.page'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

const GLOBAL_DELAY = 1000;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Default template test
describe('Jay and the sky WDIO Tests', () => {
  it('should contain a clickable hamburger menu', async () => {
    await JayHomePage.open()
    await delay(GLOBAL_DELAY);
    await JayHomePage.clickHamburgerButton();
    await delay(GLOBAL_DELAY);
    await JayHomePage.clickXButton();
    await delay(GLOBAL_DELAY);
    await JayHomePage.clickHamburgerButton();
    await delay(GLOBAL_DELAY);
    await JayHomePage.clickXButton();
    await delay(GLOBAL_DELAY);

  //   await LoginPage.login('tomsmith', 'SuperSecretPassword!')
  //   await expect(SecurePage.flashAlert).toBeExisting()
  //   await expect(SecurePage.flashAlert).toHaveTextContaining(
  //     'You logged into a secure area!')
  })
})