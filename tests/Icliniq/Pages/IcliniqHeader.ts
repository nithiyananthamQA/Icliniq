
import { Page } from "@playwright/test";

export default class Headerpage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async ClickLoginBtn() {
        const LoginBtn = await this.page.getByRole('link', { name: 'Login' });
        await LoginBtn.click();

        if (LoginBtn != null) {
            return LoginBtn;
        } else {
            throw new Error('Login Button is not clickable');
        }
    }

    public async ClickSignout() {
        const SoutDropDown = await this.page.locator("//button[@aria-label='welcome']");
        await SoutDropDown.dispatchEvent('SoutDropDown')
        await SoutDropDown.click()
        await this.page.waitForSelector('(//a[normalize-space()="Log Out"])[3]')

        const SignoutBtn = await this.page.locator('(//a[normalize-space()="Log Out"])[3]');
        await SignoutBtn.click();
    }
}
