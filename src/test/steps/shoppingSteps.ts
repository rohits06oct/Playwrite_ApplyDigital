import { Given, When, Then, setDefaultTimeout, Before } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import { Browser, chromium } from "@playwright/test";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import RegisterPage from "../pages/RegisterPage";
import CheckoutPage from "../pages/CheckoutPage";

let browser: Browser;
let page: Page;
let homePage: HomePage;
let productsPage: ProductsPage;
let productDetailsPage: ProductDetailsPage;
let cartPage: CartPage;
let registerPage: RegisterPage;
let checkoutPage: CheckoutPage;

setDefaultTimeout(40_000); // Increase timeout to 40 seconds

Given("I navigate to {string}", async function (url) {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.setViewportSize({ width: 1536, height: 864 });
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    registerPage = new RegisterPage(page);
    
    await homePage.navigate(url);
});

When("I go to the Products section", async function () {
    await homePage.goToProducts();
});

When("I choose the third product and view its details", async function () {
    await productsPage.selectThirdProduct();
});

When("I enter a random quantity and add the product to the cart", async function () {
    const quantity = Math.floor(Math.random() * 20) + 1;
    await productDetailsPage.enterQuantity(quantity);
    await productDetailsPage.addToCart();
    await productDetailsPage.viewCart();
});

When("I proceed to checkout", async function () {
    await cartPage.proceedToCheckout();
});

Then("I should see the Register\\/Login modal", async function () {
    await expect(page.locator("div[class='modal-body']")).toBeVisible();
});

Given("I click to Register\\/Login button", async function () {
    await checkoutPage.registerButton();
});

When("I register a new user with random details", async function () {
    await registerPage.registerRandomUser();
    await registerPage.enterAllDetails();
});

When("I confirm the order", async function () {
    await cartPage.proceedToCheckout();
});

Then("I log out successfully", async function () {
    await page.click("a[href='/logout']");
    await browser.close();
});
