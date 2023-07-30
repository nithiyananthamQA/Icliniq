import { expect,test } from "@playwright/test";

test('Dialog', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
     page.on('dialog', dialog =>{
         expect(dialog.type()).toContain('alert')
         expect(dialog.message()).toContain('I am an alert box!')
        dialog.accept()

    } )
    await page.getByRole('button', { name: 'Alert' }).click();
    await page.waitForTimeout(2000)

   

})
