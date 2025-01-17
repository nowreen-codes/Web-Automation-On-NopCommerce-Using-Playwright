import { Page } from "@playwright/test";

const jewelryCartIcon="//a[@class='ico-cart']";
const jewelryEmptyCartMsg="//span[@class='cart-qty' and text()='(0)']";
const jewelryRemoveCartProduct="//button[@name='updatecart' and @class='remove-btn']";
const jewelryAddCartProduct="//button[contains(text(), 'Add to cart')]";
const jewelryPopupMsg="//p[contains(text(), 'The product has been added')]";
const jewelryCloseCart="//span[@class='close' and @title='Close']";
const jewelryQuantityInput="//input[contains(@name, 'itemquantity') and contains(@class, 'qty-input')]";
const jewelryUpdateCart="//button[@type='submit' and @name='updatecart']";
const termsCondition="//input[@type='checkbox' and @name='termsofservice']";
const checkoutButtonClick="//button[@type='submit' and @name='checkout']";

export default class Jewelry {
constructor(public page: Page) {
}

async clearCart() {
const cartIcon = this.page.locator(jewelryCartIcon);
await cartIcon.hover();
await cartIcon.click();
const emptyCartMessage = this.page.locator(jewelryEmptyCartMsg);
if (await emptyCartMessage.isVisible()) {
console.log("Cart is already empty.");
} else {

 while (true) {
const removeButtons = this.page.locator(jewelryRemoveCartProduct);
const removeButtonCount = await removeButtons.count();
                
if (removeButtonCount === 0) {
console.log("Your Shopping Cart is empty!");
break; 
}
await removeButtons.nth(0).click();
await this.page.waitForTimeout(1000); 
}
}
}

async addFirstAndSecondProductsToCart() {
       
const addFirstAndSecondProductsToCart = this.page.locator(jewelryAddCartProduct);
        await addFirstAndSecondProductsToCart.nth(0).click();
        const popupMessage1 = this.page.locator(jewelryPopupMsg);
        await popupMessage1.waitFor({ state: "visible" });

        
        await addFirstAndSecondProductsToCart.nth(1).click();
        const popupMessage2 = this.page.locator(jewelryPopupMsg);
        await popupMessage2.waitFor({ state: "visible" });

        
        const closeButton = this.page.locator(jewelryCloseCart);
        await closeButton.click();

        const cartIcon = this.page.locator(jewelryCartIcon);
        await cartIcon.hover();
        await cartIcon.click();
    }


    async updateQuantityForProduct(productName: string, quantity: number) {
    const productRow = this.page.locator(`//tr[contains(., '${productName}')]`); //. refers to the current node and its children
    const quantityInput = productRow.locator(jewelryQuantityInput);
    const updateCartButton = this.page.locator(jewelryUpdateCart);

   
    await quantityInput.waitFor({ state: 'visible', timeout: 10000 });

   
    await quantityInput.fill('');
    await quantityInput.fill(quantity.toString());

    
    await updateCartButton.click();
    const termsCheckbox = this.page.locator(termsCondition);
    await termsCheckbox.check(); 
        const checkoutButton = this.page.locator(checkoutButtonClick);
        await checkoutButton.click();
}


    
}
