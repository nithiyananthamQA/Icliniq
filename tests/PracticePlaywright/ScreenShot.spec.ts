import {test,expect} from "@playwright/test"


test('Screenshot test', async ({page}) => {
    await page.goto('https://staging.icliniq.com/')

    await page.screenshot({path:'tests/ScreenShots/'+Date.now()+'HomePage.png',fullPage:true})
})


