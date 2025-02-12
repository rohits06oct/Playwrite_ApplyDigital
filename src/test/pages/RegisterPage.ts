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

        await this.waitForElement(this.title);
        await this.click(this.title);
        await this.type(this.passwordInput, password);
        await this.page.locator('select[data-qa="days"]').selectOption({ value: "13" });
        await this.page.locator('select[data-qa="months"]').selectOption({ value: "10" });
        await this.page.locator('select[data-qa="years"]').selectOption({ value: "1980" });
        await this.type(this.firstNameInput, firstName);
        await this.type(this.lastNameInput, lastName);
    }
}
