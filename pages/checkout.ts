import { Page,expect } from "@playwright/test";
 
const billiingFirstName="//input[@type='text' and @name='BillingNewAddress.FirstName']";
const billiingLastName="//input[@name='BillingNewAddress.LastName']";
const billiingEmail="//input[@name='BillingNewAddress.Email']";
const billingCompany="//input[@name='BillingNewAddress.Company']";
const billingCountry="//select[@name='BillingNewAddress.CountryId']";
const billingState="//select[@name='BillingNewAddress.StateProvinceId']";
const billingCity="//input[@name='BillingNewAddress.City']";
const billingAddress1="//input[@name='BillingNewAddress.Address1']";
const billingAddress2="//input[@name='BillingNewAddress.Address2']";
const billingZip="//input[@name='BillingNewAddress.ZipPostalCode']";
const billingPhone="//input[@name='BillingNewAddress.PhoneNumber'] ";
const billingFax="//input[@name='BillingNewAddress.FaxNumber'] ";
const billingNextBtn="//button[@type='submit' and @id='billingaddress-next-button']";

const shippingMethodGround="//input[@type='radio' and @value='Ground___Shipping.FixedByWeightByTotal']";
const shippingMethodNextBtn="//button[@type='submit' and @class= 'button-1 shipping-method-next-step-button']";

const paymentMethodCheckMoneyOrder="//input[@type='radio' and @value='Payments.CheckMoneyOrder' and @id='paymentmethod_4']";
const paymentMethodNextBtn="//button[@type='submit' and @class='button-1 payment-method-next-step-button']";

const paymentInfoNextBtn="//button[@type='submit' and @class='button-1 payment-info-next-step-button']";

const confirmOrderNextBtn="//button[@type='submit' and @class='button-1 confirm-order-next-step-button']";
const orderDetailsBtn="//a[contains(text(), 'Click here for order details.')]";


export default class Checkout {

    constructor(public page: Page) {
    }

    async enterFirstName(firstname: string){
        await this.page.locator(billiingFirstName)
        .type(firstname);
       // await this.page.waitForTimeout(2000); 
        }

    async enterLastName(lastname: string){
        await this.page.locator(billiingLastName)
        .type(lastname);
       // await this.page.waitForTimeout(2000); 
        }

    async enterEmail(email: string){
        await this.page.locator(billiingEmail)
        .type(email);
        }

    async enterCompanyName(company: string){
        await this.page.locator(billingCompany)
        .type(company);
        }
         async enterCountryName(country: string) {
            const countryDropdown = this.page.locator(billingCountry);
            await countryDropdown.selectOption({ 
                label: country 
            }); 
            await this.page.locator(billingState).waitFor({ state: 'visible' });
        }
        
        async enterStateName(state: string) {
            const stateDropdown = this.page.locator(billingState);
            await stateDropdown.selectOption({ 
                label: state
             }); 
        } 
    async enterCityName(city: string){
         await this.page.locator(billingCity)
        .type(city);
        }  
    async enterAddress1(address1: string){
        await this.page.locator(billingAddress1)
        .type(address1);
         } 

    async enterAddress2(address2: string){
        await this.page.locator(billingAddress2)
        .type(address2);
        } 

    async enterZip(zip: string){
    await this.page.locator(billingZip)
    .type(zip);
    } 
    
    async enterPhoneNo(phoneNo: string){
    await this.page.locator(billingPhone)
    .type(phoneNo);
                    
    } 
    async enterFaxNo(faxNo: string){
    await this.page.locator(billingFax)
    .type(faxNo);
    } 
                
    async billingAddressNextButton(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click(billingNextBtn)
            
        ]);

        
        const radioButton = this.page.locator(shippingMethodGround);
    await radioButton.waitFor({ state: 'visible' });
    await radioButton.check();

    }
    
    async shippingMethodNextStepButton() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(shippingMethodNextBtn)
        ]);
    
        
        const radioButton = this.page.locator(paymentMethodCheckMoneyOrder);
     
        await radioButton.click();
    }

    async paymentMethodNextStepButton() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(paymentMethodNextBtn)
        ]);
    
    }
    async paymentInfoNextStepButton() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(paymentInfoNextBtn)
        ]);
    
    }  
        async clickConfirmOrder() {
        
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(confirmOrderNextBtn)
        ]);
    
    }  
    async clickConfirmOrderDetailsLink() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(orderDetailsBtn)
        ]);
    
    } 
    
    
    
              
}
