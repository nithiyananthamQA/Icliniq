import {test,expect} from "@playwright/test"

test('Mouse Hover',async ({page}) => {
    
    await page.goto('https://tus.io/demo')


    await page.waitForSelector('#P0-0')
    await page.locator('#P0-0').click

    await page.locator('#P0-0').setInputFiles("C:\\Users\\nathi\\Downloads\\TestLeaf Logo (6).png")

    await page.waitForTimeout(7000)

    const successmsg =  await page.locator('//p[@class="_heading_1as67_21"]').textContent()

    await expect(successmsg).toContain('The upload is complete!')
    
    await page.waitForTimeout(2000)

})