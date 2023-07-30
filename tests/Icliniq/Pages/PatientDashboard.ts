import { Page } from "@playwright/test";

export default class DashBoard{
    private page:Page

    constructor(page:Page){
        this.page= page
    }

    public async ClickAskQueryBtn(){
       const Querybtn =  await this.page.getByRole('link', { name: 'Ask a Query' })
       Querybtn.click()
    }

}