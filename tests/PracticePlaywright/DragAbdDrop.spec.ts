import { test, expect } from "@playwright/test"

test('Drad and Drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const olso = await page.locator('#box1')

    const Sweden = await page.locator('#box102')

    await olso.dragTo(Sweden)

    await page.waitForTimeout(2000)




    //Keyboard Actions 

    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArrowLeft.png' });
    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'O.png' });

})