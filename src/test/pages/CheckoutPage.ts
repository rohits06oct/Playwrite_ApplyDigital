import BasePage from "./BasePage";

export default class CheckoutPage extends BasePage {
    private registerLoginButton = "div[class='modal-body'] a[href]";

    async registerButton() {
        await this.click(this.registerLoginButton);
    }

}
