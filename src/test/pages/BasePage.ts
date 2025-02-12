import { Page } from "@playwright/test";

export default class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url, { timeout: 60_000, waitUntil: "domcontentloaded" });
    }

    async click(locator: string) {
        await this.page.locator(locator).click();
    }

    async type(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    async getText(locator: string): Promise<string> {
        return this.page.locator(locator).innerText();
    }

    async waitForElement(locator: string, timeout: number = 20000): Promise<void> {
        await this.page.locator(locator).waitFor({ state: "visible", timeout });
    }

    async waitForImageToLoad(locator: string): Promise<void> {
        try {
            await this.page.waitForSelector(locator, { state: "attached", timeout: 10000 });
            await this.page.waitForFunction(
                (selector) => {
                    const img = document.querySelector(selector) as HTMLImageElement;
                    return img && img.complete && img.naturalWidth > 0;
                },
                locator
            );
            console.log(`✅ Image ${locator} loaded successfully.`);
        } catch (error) {
            console.error(`Error: Image ${locator} did not load within timeout:`, error);
        }
    }

}
