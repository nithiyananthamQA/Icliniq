import { test, expect } from '@playwright/test';


// select option fromt the element hidden when you click outside of it 
//Use the selectorhub debugger mode to freeze the element 
//Or use firefox to locate the element
 
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator("//input[@name='username']").fill('Admin')
  await page.locator("//input[@name='password']").fill('admin123')
  await page.locator("//button[@type='submit']").click()

  await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click()

  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div').click()
  await page.waitForSelector('//div[@role="listbox"]//span')

   const lists = await page.$$('//div[@role="listbox"]//span')

   for(let list of lists){

    const text = await list.textContent()
   // console.log(text);
    if(text?.includes('QA Engineer')){
        await list.click()
    }
   }
   await page.waitForTimeout(3000)
});