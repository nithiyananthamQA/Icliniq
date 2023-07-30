import {test,expect} from '@playwright/test'

test('Frame test ',async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //currently not working see how to work out this

    const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame?.fill('//input[@name="mytext3"]','Hello three')

    const childframe = frame?.childFrames()
    console.log(childframe?.length);
    
    
    // await page.waitForTimeout(2000)
    // await childframe[0].locator('//*[@id="i5"]/div[3]/div/div').check()
    // await page.waitForTimeout(2000)
    // await frame3?.check('//*[@id="i5"]/div[3]/div/div')

})