import { Page,test,expect } from "@playwright/test";

import Headerpage from '../Icliniq/Pages/IcliniqHeader'
import Login from "./Pages/LoginPage";
import IcliniqUrl from './Environment/UrlToBeTest'
export { page, headerpage, login, url };


let page:Page
let headerpage:Headerpage
let login: Login
let url:IcliniqUrl

test.beforeAll(async ({browser}) => {

    page = await browser.newPage() 
     await page.setViewportSize({ width: 1500, height: 1080 });
    headerpage = new Headerpage(page);
    login = new Login(page)
    url = new IcliniqUrl(page)
    await url.URL
    await headerpage.ClickLoginBtn()
})

test('Enter Credentials',async()=>{


    await login.UsernameInput()
    await login.PasswordInput()
    await login.LoginButton()
  
})

test.afterAll( async ( ) => {

    await headerpage.ClickSignout();

});