import { $ } from '@wdio/globals';
import Page from './page.base';
import JayPageBase from './page.base';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JayHomePage extends JayPageBase {
    /**
     * define selectors using getter methods
     */
    public get hamburgerMenuButton() {
        return $(`img.hamburgerIcon`);
    }
    public get XButton() {
        return $(`#XButton`)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickHamburgerButton() {
        (await this.hamburgerMenuButton).click();
    }
    public async clickXButton() {
        (await this.XButton).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open();
    }
}

export default new JayHomePage();
