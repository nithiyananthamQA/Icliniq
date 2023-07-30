import { expect,test } from "@playwright/test";

test('Dsate Picker', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//input[@id="datepicker"]').click()
    await page.locator('//a[@data-handler="prev"]').click()

    await page.waitForTimeout(2000)
    const Year = '2023'
    const month = 'February'
    const day = '12'


    while (true) {
        
        await page.waitForSelector('#ui-datepicker-div')
        const months   = await page.locator("//div[@class='ui-datepicker-title']/span[1] ").textContent()

        const years  = await page.locator("//div[@class='ui-datepicker-title']/span[2]").textContent()

        if( Year == years && month == months){
            
            break
        }
        await page.locator('//a[@data-handler="prev"]').click()
       
    }

    //select the date
    let dates=  await page.$$('//a[@class="ui-state-default"]')
    //we can select the date by passing the value in the xpath
    //await page.locator(`//a[@class='ui-state-default'][text()='${day}']`).click()

    for(const date of dates){
        if(await date.textContent()==day){
            await date.click()
            break
        }
    }


})