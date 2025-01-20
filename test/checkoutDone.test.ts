import { expect, test } from "../base/fixture";
import * as data from "../test-data/billingAddress-test-data.json"
import * as data1 from "../test-data/registration-test-data.json"
const email = "nou@gmail.com";
const password = "q123#hsjueA";
const baseURL="https://test460.nop-station.com/en/"
test.describe("Page object test demo", async () => {


test("Registration using valid credentials", async ({ page, registrationPage }) => {
await page.goto(baseURL);
await registrationPage.registerStart();
await registrationPage.enterFirstName(data1.firstname);
await registrationPage.enterLasttName(data1.lastname);
await registrationPage.DateOfBirth("25.08.1850");
await registrationPage.enterEmail(email);
await registrationPage.enterCompanyDetails("");
await registrationPage.enterOptions();
await registrationPage.enterPassword(password);
await registrationPage.enterConfirmPassword(password);
await registrationPage.clickRegister();

})

test("Login using valid credentials", async ({ page, loginPage }) => {
    await page.goto(baseURL);

    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.checkedRememberMe();
    await loginPage.clickLogin();
    const welcomeMsg = await page.locator("//h2[text()='Welcome to our store']");
    const actualMsg = await welcomeMsg.textContent();
    console.log("Actual Welcome Message:", actualMsg);
    expect(actualMsg).toBe("Welcome to our store");


})

test("Add to cart test", async ({ page, loginPage, homePage, jewelry}) => {
    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
    await loginPage.login(email, password);
    await jewelry.clearCart();

    await homePage.clickOnBooks();
    await jewelry.addFirstAndSecondProductsToCart();

    await jewelry.updateQuantityForProduct("Vintage Style Engagement Ring", 3);
   
})

test.only("User able to place order successfully test", async ({ page, loginPage, homePage, jewelry, checkout }) => {

 await page.goto(baseURL);

 await loginPage.loginStart();
 await loginPage.login(email, password);
 const welcomeMsg = await page.locator("//h2[text()='Welcome to our store']");
 const actualMsg = await welcomeMsg.textContent();
 console.log("Welcome Message is written on that page :", actualMsg);
 expect(actualMsg).toBe("Welcome to our store");
 await jewelry.clearCart();
 await homePage.clickOnBooks();
 await jewelry.addFirstAndSecondProductsToCart();  
 await jewelry.updateQuantityForProduct("Vintage Style Engagement Ring", 3);
//Billing Address

 const Billing_Address = await page.locator("//h1[text()='Billing address']");
 const Billing_Address_ActualMsg = await Billing_Address.textContent();
 console.log("Billing Address is written on that page:", Billing_Address_ActualMsg);
 expect(Billing_Address_ActualMsg).toBe("Billing address");


 await checkout.enterFirstName(data.firstname);
 await checkout.enterLastName(data.lastname);
 await checkout.enterEmail("");
 await checkout.enterCompanyName(data.company);
 await checkout.enterCountryName(data.country);
 await checkout.enterStateName(data.state);
 await checkout.enterCityName(data.city);
 await checkout.enterAddress1(data.address1);
 await checkout.enterAddress2(data.address2);
 await checkout.enterZip(data.zipcode);
 await checkout.enterPhoneNo(data.phone);
 await checkout.enterFaxNo("");
 
 await checkout.billingAddressNextButton();

 //Select Shipping Method
 const Select_Shipping_Method = await page.locator("//h1[text()='Select shipping method']");
 const Select_Shipping_Method_ActualMsg = await Select_Shipping_Method.textContent();
 console.log("Select Shipping Method is written on that page :", Select_Shipping_Method_ActualMsg);
 expect(Select_Shipping_Method_ActualMsg).toBe("Select shipping method");

 await checkout.shippingMethodNextStepButton();

 //Select Payment Method
 const Select_Payment_Method = await page.locator("//h1[text()='Select payment method']");
 const Select_Payment_Method_ActualMsg = await Select_Payment_Method.textContent();
 console.log("Select Payment Method is written on that page :", Select_Payment_Method_ActualMsg);
 expect(Select_Payment_Method_ActualMsg).toBe("Select payment method");

 await checkout.paymentMethodNextStepButton();  

 //Payment Information
 const Payment_Information = await page.locator("//h1[text()='Payment information']");
 const Payment_Information_ActualMsg = await Payment_Information.textContent();
 console.log("Payment Information is written on that page :", Payment_Information_ActualMsg);
 expect(Payment_Information_ActualMsg).toBe("Payment information");

 await checkout.paymentInfoNextStepButton();

 //Order Confirmation
 const Confirm_Your_Order = await page.locator("//h1[text()='Confirm your order']");
 const Confirm_Your_Order_ActualMsg = await Confirm_Your_Order.textContent();
 console.log("Confirm Your Order is written on that page :", Confirm_Your_Order_ActualMsg);
 expect(Confirm_Your_Order_ActualMsg).toBe("Confirm your order");

 await checkout.clickConfirmOrder();


 const Verify_ThankYou_Message = await page.locator("//h1[contains(text(), 'Thank you')]");
 const Verify_ThankYou_Message_ActualMsg = await Verify_ThankYou_Message.textContent();
 console.log("ThankYou Message is written on that page :", Verify_ThankYou_Message_ActualMsg);
 expect(Verify_ThankYou_Message_ActualMsg).toBe("Thank you");

 
 await checkout.clickConfirmOrderDetailsLink();
 const Order_Information = await page.locator("//h1[contains(text(), 'Order information')]");
 const Order_Information_ActualMsg = await Order_Information.textContent();
 console.log("Order Information :", Order_Information_ActualMsg);
 expect(Order_Information_ActualMsg).toBe("Order information");

})

})