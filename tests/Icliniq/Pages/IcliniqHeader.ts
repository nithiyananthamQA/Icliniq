
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
        await this.page.locator('//*[@id="nav"]/div/ul[2]/li[4]/a').click()
        await this.page.locator('//*[@id="nav"]/div/ul[2]/li[4]/ul/div[2]/li[1]/a').click()
        const signoutbtn=  await this.page.locator("//*[@id='welcome-dropdown']/span[2]/b")
        await signoutbtn.click()
        //  await this.page.getByLabel('welcome').click();
        const SignoutBtn = await this.page.locator('//*[@id="navbar"]/ul[2]/li/ul/li[3]/a')
        await SignoutBtn.click();
        
    }
}
