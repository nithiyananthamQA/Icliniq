import { test, expect } from "@playwright/test";

test('Input boxes test', async ({ page }) => {

    // input boxes
    // find the parent element if the element is not locatable
    await page.goto("https://itera-qa.azurewebsites.net/home/automation")

    await page.locator("//input[@id='name']").fill('hello')
    await page.waitForLoadState()

    await page.locator("//input[@id='phone']").fill('2734987342')

    await page.locator("//input[@id='email']").fill('test@gmail.com')

    await page.locator("//input[@id='password']").fill('@ni12345');

    await page.getByLabel('Address').fill('sample address, address ');


    //Radio buttons
    await page.locator("//input[@id='male']").check();

    const MaleCheckbox = await page.locator("//input[@id='male']")

    const isCheckedm = MaleCheckbox.isChecked()

    await expect(isCheckedm).toBeTruthy();


    const femaleCheckbox = await page.locator('//input[@id="female"]');

    const isCheckedFemale = await femaleCheckbox.isChecked();

    await expect(isCheckedFemale).toBeFalsy();

})