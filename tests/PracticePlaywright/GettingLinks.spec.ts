import { test } from "@playwright/test";

test('getlinks', async({page})=>{

    await page.goto('https://staging.icliniq.com/')

   const links = await page.$$('a')
    for (const link of links ){

        const content = await link.textContent()
        console.log(content)
        
    }
})