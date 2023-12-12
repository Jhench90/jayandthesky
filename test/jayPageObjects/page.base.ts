import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class JayPageBase {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (pathUrl?: string) {
        let path = pathUrl || '';
        return browser.url(`https://main.d1umvi1ecncyca.amplifyapp.com/${path}`)
    }
}
