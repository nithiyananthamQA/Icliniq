import {test,expect} from '@playwright/test'


// using the before each and after each functionality

let page;

test.beforeEach(async ({browser}) => {

   page = await browser.newPage();
   await page.goto('https://staging.icliniq.com/')

    //Login

    await page.getByRole(('link'),{name:'Login'}).click()
    await page.locator('#username').fill('2375')
    await page.locator('#rpassword').fill('@Ni12345')
    await page.locator("//button[normalize-space()='Login']").click()

})

test.afterEach(async()=>{

     //Logout

     await page.locator('#welcome-dropdown').click()
     await page.locator('//a[normalize-space()="Log Out"]').click()
     await page.waitForTimeout(2000)
})


test('Ask a Query',async () => {
    
    //Askaquery
    await page.locator("//a[normalize-space()='Ask a Query']").click()
    await page.locator('#query').fill('Ask a doctor online and get quick medical advice for your health queries. Our medical panel consists of over 3500+ doctors from 80+ specialties.')
    await page.locator('#select2-speciality-container').click()
    const specialities = await page.$$("//li[@role='option']")
    for(const speciality of specialities){
        const spec =  await speciality.textContent()
        if(spec?.includes('Sexology')){
            await speciality.click()
        }

    }
  
})

test('sample icliniq',async () => {
    
     //sample icliniq
     await page.locator('//a[@class="gradient-text"]').hover()
     await page. locator("//div[@class='col-md-5 col-sm-5 sub-nav']//a[normalize-space()='Choose a Doctor']").click()

})