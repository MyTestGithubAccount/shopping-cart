import { ProductListPage } from '../lib/pages/product-list.po'
import { When, Then } from 'cucumber'

const productListPage = new ProductListPage();

  /* === When === */

  When(/^I navigate to the Products list$/, async function() {
    await productListPage.navigateToPage();
  });

  /* === Then === */

  Then(/^Products are displayed$/, async function() {
    expect(productListPage.isListPresent()).toBe(true);
  });

 
