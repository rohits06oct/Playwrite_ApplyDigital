import BasePage from "./BasePage";
import { faker } from "@faker-js/faker";

export default class CartPage extends BasePage {
    private checkoutBtn = "a[class='btn btn-default check_out']";
    private cardNumberInput = "input[data-qa='card-number']";
    private cardNameInput = "input[data-qa='name-on-card']";
    private cardCVVInput = "input[data-qa='cvc']";
    private cardMonthInput = "input[data-qa='expiry-month']";
    private cardYearInput = "input[data-qa='expiry-year']";
    private patBtn = "button[data-qa='pay-button']";

    async openCartPage() {
        await this.navigate("https://automationexercise.com/view_cart");
    }

    async proceedToCheckout() {
        await this.waitForElement(this.checkoutBtn);
        await this.click(this.checkoutBtn);
    }

    async proceedToPlaceOrder() {
        await this.waitForElement(this.checkoutBtn);
        await this.click(this.checkoutBtn);
    }

    async paymentDetails(){
        const cardNumber = faker.finance.creditCardNumber();
        const cardName = faker.finance.creditCardIssuer();
        const cardCVV = faker.finance.creditCardCVV();

        await this.type(this.cardNumberInput, cardNumber);
        await this.type(this.cardNameInput, cardName);
        await this.type(this.cardCVVInput, cardCVV);
        await this.type(this.cardMonthInput, "08");
        await this.type(this.cardYearInput, "2028");
    }

    async proceedToPay() {
        await this.waitForElement(this.patBtn);
        await this.click(this.patBtn);
    }


}
