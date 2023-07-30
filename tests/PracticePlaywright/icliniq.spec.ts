// @ts-check



import { test, expect } from '@playwright/test'

test('Test', async ({ page }) => {
    await page.goto("https://staging.icliniq.com/");
    const PageTitle =  page.title();
    console.log('The page title'+ PageTitle);
    // getting the logo is vidible or not
    //  const logo = await page.locator('//*[@id="nav"]/div/div[2]/div[1]/a/img[2]')
    //  await expect.soft(logo,'my soft asserrtion').toBeVisible()

    await expect(page).toHaveTitle('iCliniq - Online Doctor 24/7 | Expert MDs Answer Your Questions ')
    await page.getByRole('link', { name: 'Login' }).click();
    const pageurl =await page.url();
    console.log(pageurl);
    await page.waitForLoadState();

    await page.locator('[id="username"]').fill('2375')
    await page.locator('[id="rpassword"]').fill('@Ni12345')
    // await page.getByRole('button',{name:'Login'}).click()
    const verifylogin = await page.locator("button[type='submit']")
    await expect(verifylogin).toBeVisible()
    await page.click('button[type="submit"]')


    // verify the text by using get the element text
    const name = await page.locator('//*[@id="idBody"]/div[2]/div[1]/div/h2').textContent()
    console.log(name)

    //verify the text is visible
    await expect(await page.getByText(' Welcome to iCliniq!')).toBeVisible()
  
    //ask a query

    await page.locator("//a[normalize-space()='Ask a Query']").click()
    await page.locator('//textarea[@id="query"]').fill('Ask a doctor online and get quick medical advice for your health queries Our medical panel consists of over 3500+ doctors from 80+ specialties.')
    

    await page.locator('//span[@id="select2-speciality-container"]').click()

    const lists = await page.$$('#speciality option')
    const lists1 = await page.locator('#speciality option')
    
    
    
    
    //print the specialities in the dropdown
    for(const list of lists){
        
        let text =await list.textContent()
        console.log(text);
    }

    let status = false
    for(const list of lists){
        let text =await list.textContent()
        
        if(text?.includes('Hematology')){
            await page.selectOption('#speciality', 'Hematology')
            status=true
        }


    }
    
    
    // for(const list of lists){
    //     let text = await list.textContent()
    //     if(text.includes('hello')){

    //     }
    

   

    await page.close()

    
});