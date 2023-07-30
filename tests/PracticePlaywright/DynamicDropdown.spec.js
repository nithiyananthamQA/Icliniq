import {test,expect} from '@playwright/test'

test('Dynamic dropdown', async({page})=>{

    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('erode')

    await page.waitForSelector('//li[@class="sc-iwsKbI jTMXri"]/div/text[1]')

    const alloptions = await page.$$('//li[@class="sc-iwsKbI jTMXri"]/div/text[1]')

    for(let option of alloptions){
        const opt = await option.textContent();
        //console.log(opt);
        if(opt.includes('Vijayamangalam')){
            await option.scrollIntoViewIfNeeded()
            await page.click(opt)    // not clicking the element
            break
        }
        await page.waitForTimeout(2000)
    }
})