import { Page, expect } from "@playwright/test";

const loginStart="//a[@class='ico-login']";
const loginEmail="//input[@name='Email'] ";
const loginPassword="//input[@type='password' and @id='Password']";
const loginRememberMe="//input[@type='checkbox' and @name='RememberMe'] ";
const loginButton="//button[@type= 'submit' and @class= 'button-1 login-button'] ";

export default class LoginPage {
    constructor(public page: Page) {}

    async loginStart(){
        return this.page.locator(loginStart).click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.checkedRememberMe();
        await this.clickLogin(); 

    }

    async enterEmail(email: string) {
        await this.page.locator(loginEmail).type(email);
    }

    async enterPassword(password: string) {
        await this.page.locator(loginPassword).type(password);
    }

    async checkedRememberMe() {
        return this.page.locator(loginRememberMe);
    }

    async clickLogin() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(loginButton)
        ]);
    }
}
