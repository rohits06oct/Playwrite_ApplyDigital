import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    private productsLink = "a[href='/products']";
    private pageImage = 'img[src="/get_product_picture/8"]';

    async goToProducts() {
            await this.waitForImageToLoad(this.pageImage);
            await this.waitForElement(this.productsLink);
            await this.click(this.productsLink);
    }
}
