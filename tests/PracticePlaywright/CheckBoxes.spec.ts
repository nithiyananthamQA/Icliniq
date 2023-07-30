const { expect,test } = require("@playwright/test");

test('Checkbox', async({page}) => {

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    const CheckboxLocators =   ["//input[@type='checkbox' and @id='monday']",

                                "//input[@type='checkbox' and @id='tuesday']",
                                "//input[@type='checkbox' and @id='wednesday']"]
                               
    


for(const locator of CheckboxLocators){

     await page.locator(locator).check()
     for (const ucheck of CheckboxLocators){
        if(page.locator(locator).isChecked()){
            await page.locator(locator).uncheck()
        }
    
    }
}

await page.waitForTimeout(5000)
})
