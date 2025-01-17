import { Page } from "@playwright/test";

const registerStart = "//a[@class='ico-register']";
const registerGender = "//input[@type='radio' and contains(@value, 'F')] ";
const registerFirstName = "//input[@name= 'FirstName']";
const registerLastName = "//input[@name= 'LastName'] ";
const registerDateOfBirth = "//select[@name='DateOfBirthDay']";
const registerEmail = "//input[@name='Email'] ";
const registerCompany = "//input[@name='Company'] ";
const registerNewsletter = "//input[@type='checkbox' and @name='Newsletter'] ";
const registerPassword = "//input[@type='password' and @id='Password'] ";
const registerConfirmPassword = "//input[@type='password' and @name='ConfirmPassword'] ";
const registerButton = "//button[@type='submit' and @name='register-button'] ";

export default class RegisterPage{

        constructor(public page: Page){

        }

        async registerStart(){
            return this.page.locator(registerStart).click();
        }

        async enterGender(){
        return this.page.locator(registerGender);
            
        }


        async enterFirstName(firstname: string){
        await this.page.locator(registerFirstName)
        .type(firstname);
        }
         
        async enterLasttName(lastname: string){
        await this.page.locator(registerLastName)
        .type(lastname);
        }

        async DateOfBirth(dateofbirth: string){
        await this.page.locator(registerDateOfBirth)
        .type(dateofbirth)
        }

        async enterEmail(email: string){
        await this.page.locator(registerEmail)
        .type(email);
        }

        async enterCompanyDetails(company: string){
        await this.page.locator(registerCompany)
        .type(company);
        }

        async enterOptions(){
        return this.page.locator(registerNewsletter)
        }

        async enterPassword(password: string){
        await this.page.locator(registerPassword)
        .type(password);
        }

        async enterConfirmPassword(password: string){
        await this.page.locator(registerConfirmPassword)
        .type(password);
        }

        async clickRegister(){
            await Promise.all([
                this.page.waitForNavigation({waitUntil:"networkidle"}),
                this.page.click(registerButton)
            ])
        
        }
    }
