import { Page } from "@playwright/test";

export default class Headerpage {
    private page: Page
        private  Environment = 'https://staging.icliniq.com/'
    //   private  Environment = 'https://www.icliniq.com/'
    //   private  Environment = 'https://staging.icliniq.com/'
    //   private  Environment = 'https://staging.icliniq.com/'
    constructor(page: Page) {
        this.page = page
    }

    //Locators'
    public get NavigateURL() {
        const LoginUrl = this.page.goto(this.Environment)
        if (LoginUrl != null) {
            return LoginUrl;
        }
        else throw new Error('the Url is not exist')
       }
       
}