import BasePage from "./BasePage";

export default class ProductsPage extends BasePage {
    private productSelector = "//a[@href='/product_details/3']";

    async selectThirdProduct() {
        await this.click(this.productSelector);
    }
}
