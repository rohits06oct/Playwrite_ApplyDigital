import BasePage from "./BasePage";

export default class CartPage extends BasePage {
    private checkoutBtn = "a[class='btn btn-default check_out']";

    async proceedToCheckout() {
        await this.click(this.checkoutBtn);
    }
}
