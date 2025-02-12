import BasePage from "./BasePage";
import { faker } from "@faker-js/faker";

export default class RegisterPage extends BasePage {
    private nameInput = "//input[@data-qa='signup-name']";
    private emailInput = "//input[@data-qa='signup-email']";
    private signUpBtn = "button[data-qa='signup-button']";
    private title = "//label[@for='id_gender1']/div";
    private passwordInput = "//input[@data-qa='password']";
    private firstNameInput = "input[data-qa='first_name']";
    private lastNameInput = "input[data-qa='last_name']";
    private companyInput = "input[data-qa='company']";
    private addressInput = "input[data-qa='address']";
    private stateInput = "input[data-qa='state']";
    private cityInput = "input[data-qa='city']";
    private zipcodeInput = "input[data-qa='zipcode']";
    private mobilenumberInput = "input[data-qa='mobile_number']";
    private createAccBtn = "button[data-qa='create-account']";

    async registerRandomUser() {
        const name = faker.person.fullName();
        const email = faker.internet.email();

        await this.type(this.nameInput, name);
        await this.type(this.emailInput, email);
        await this.click(this.signUpBtn);
    }

    async enterAllDetails() {
        const password = faker.internet.password();
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const company = "test Company";
        const address = faker.location.streetAddress();
        const state = faker.location.state();
        const city = faker.location.city();
        const zipcode = faker.location.zipCode();
        const mobile_number = faker.phone.number();

        await this.waitForElement(this.title);
        await this.click(this.title);
        await this.type(this.passwordInput, password);
        await this.page.locator('select[data-qa="days"]').selectOption({ value: "13" });
        await this.page.locator('select[data-qa="months"]').selectOption({ value: "10" });
        await this.page.locator('select[data-qa="years"]').selectOption({ value: "1980" });
        await this.type(this.firstNameInput, firstName);
        await this.type(this.lastNameInput, lastName);
        await this.type(this.companyInput, company);
        await this.type(this.addressInput, address);
        await this.page.locator('select[data-qa="country"]').selectOption({ value: "Canada" });
        await this.type(this.stateInput, state);
        await this.type(this.cityInput, city);
        await this.type(this.zipcodeInput, zipcode);
        await this.type(this.mobilenumberInput, mobile_number);
    }

    async createAccountButton() {
        await this.click(this.createAccBtn);
    }
}
