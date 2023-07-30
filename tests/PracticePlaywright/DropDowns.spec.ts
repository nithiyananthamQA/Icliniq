import {test,expect} from '@playwright/test'

test('DropDwons', async ({page}) => {
    

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Selecting the dropdown note *there is a way to select the option by giving the value attribute of the dropdown

    //using the exact text into the selectoption
    await page.locator('#country').selectOption('india')
    await page.waitForTimeout(2000)     // to know the performed actions are done or not

    // using the text into the label 
    await page.locator('#country').selectOption({label:'Brazil'})
    await page.waitForTimeout(2000)     // to know the performed actions are done or not

    // using the index value into the select options
    await page.locator('#country').selectOption({index:5})
    await page.waitForTimeout(2000)      // to know the performed actions are done or not

    //using the selectoption fuction directly with two parameter one is locator another one in the option parameter
    await page.selectOption('#country','China')
    await page.waitForTimeout(2000)      // to know the performed actions are done or not



    //assertion in the dropdown
    //1. Check the number of options in the dropdowns
    const options = await page.locator('#country' ).allInnerTexts()
    const options1 = await page.$$('#country option') // need to add the tag name options in this kind of action // use $$ to get the count instead of using the locator
    console.log(options1.length)
    await page.waitForTimeout(2000)      // to know the performed actions are done or not

    for (const option of options){
        console.log(option)

    }

    await page.waitForTimeout(2000)      // to know the performed actions are done or not

    // search the particular options in the dropdown and select that option with the validation tobetruthy
    // Dynamic dropdowns
    let status=false
    const options2 = await page.$$('#country option')
    for(const option2 of options2){
        let text = await option2.textContent()
        if(text?.includes('Japan')){
            await page.selectOption('#country' ,'Japan')
            status=true
            break
        }
    }
    expect(status).toBeTruthy()

    await page.waitForTimeout(2000) 
    //multiselct Dropdown
    await page.selectOption('#colors',['Red','blue','Green'])
    await page.waitForTimeout(2000)      // to know the performed actions are done or not


    
})