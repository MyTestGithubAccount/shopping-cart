import { browser, element, by } from "protractor";

export class ProductListPage {

    async navigateToPage() {
        await browser.get(browser.params.baseUrl);
     }

     isListPresent() {
        element(by.id('product-list')).isPresent()
     }
}