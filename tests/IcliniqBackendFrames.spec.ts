import { test, expect } from '@playwright/test'

test('Test', async ({ page }) => {
    await page.goto("https://devtest.icliniq.com/backend.php/auth/login");

    await page.locator('//input[@name="uid"]').fill('admin')
    await page.locator('//input[@name="pwd"]').fill('cLiYRfkiFtoP@dtM')
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//body/div/div[2]/a[6]').click()
    await page.locator('//a[normalize-space()="Add New Article"]').click()

//    const Tinyframe = await page.frame('//iframe[@id="blogs_description_ifr"]')
//     await page.waitForTimeout(2000)
//     await Tinyframe?.click('#tinymce')
//     await Tinyframe?.fill('#tinymce','hello ')
//     await page.waitForTimeout(5000)



const iframeElement = await page.waitForSelector('iframe[id="blogs_description_ifr"]');
const iframe = await iframeElement.contentFrame()
const tinyMCEEditor = await iframe?.waitForSelector('#tinymce');
await tinyMCEEditor?.click(); // Click on the editor to focus
await iframe?.fill('#tinymce','Hello, this is a test!');

await page.waitForTimeout(3000);
})