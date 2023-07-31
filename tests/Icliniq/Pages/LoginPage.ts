import { Page, expect } from "@playwright/test";
let page:Page
export default class Login{

 private page:Page
 //page

    constructor (page:Page) {
        this.page = page;
    }
   
    public async UsernameInput(){
        const UsrinputBox = await this.page.locator('[id="username"]')
        await UsrinputBox.fill('2375')
    
         if(UsrinputBox != null){
             return UsrinputBox
         }
         else throw Error('Login Button is not clickable')       
     }

    public async PasswordInput(){

        const PwdInput = await this.page.locator('#rpassword').fill('@Ni12345')
        if(PwdInput != null){
            return PwdInput
        }
    }

    public async LoginButton(){
        const LoginBtn = await this.page.locator('button[type="submit"]')
        await LoginBtn.click()
        if(LoginBtn != null){
            return LoginBtn
        }
    }
        
    };
