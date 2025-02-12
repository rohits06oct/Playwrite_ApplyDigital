import BasePage from "./BasePage";

export default class ProductDetailsPage extends BasePage {
    private quantityInput = "#quantity";
    private addToCartBtn = ".btn.btn-default.cart";
    private viewCartBtn = "div[class='modal-body'] a[href='/view_cart']";

    async enterQuantity(quantity: number) {
        await this.type(this.quantityInput, quantity.toString());
    }

    async addToCart() {
        await this.click(this.addToCartBtn);
    }

    async viewCart() {
        await this.click(this.viewCartBtn);
    }
}
