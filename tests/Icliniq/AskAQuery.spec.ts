import DashBoard from "./Pages/PatientDashboard";
import { Page, test, expect } from "@playwright/test";
import { page, headerpage, login, url } from "./Login.spec";
import Login from "./Pages/LoginPage";


let dashboard:DashBoard
dashboard = new DashBoard(page)
test('Ask a query',async()=>{
    await url.URL
    await headerpage.ClickLoginBtn()
    await login.LoginButton()
    await login.PasswordInput()
    await login.UsernameInput()
    await dashboard.ClickAskQueryBtn()
    await page.waitForTimeout(3000)

})