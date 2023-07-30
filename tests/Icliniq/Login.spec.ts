import { Page,test,expect } from "@playwright/test";

import Headerpage from '../Icliniq/Pages/IcliniqHeader'
import Login from "./Pages/LoginPage";
import IcliniqUrl from '../Icliniq/Pages/IclinqUrl'

let page:Page
let headerpage:Headerpage
let login: Login
let url:IcliniqUrl

test.beforeAll(async ({browser}) => {

    page = await browser.newPage() 
    headerpage = new Headerpage(page);
    login = new Login(page)
    url = new IcliniqUrl(page)
    await url.URL
    await headerpage.ClickLoginBtn()
})

test('Enter Credentials',async()=>{


    await login.UsernameInput('2375')
    await login.PasswordInput()
    await login.LoginButton()

    
})

test.afterAll( async ( ) => {

    await headerpage.ClickSignout();

});