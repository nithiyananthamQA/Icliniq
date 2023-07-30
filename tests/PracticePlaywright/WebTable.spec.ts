import { expect, test } from "@playwright/test";

test('Web Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')


    //how to count the table columns and rows
    const table = await page.locator('//table[@id="productTable"]')

    const head = await table.locator('//thead/tr/th').count()
    console.log(head);

    await expect.soft(head).toBe(4)


    const rows = await table.locator('//tbody/tr')

    console.log(await rows.count());
    await expect.soft(await rows.count()).toBe(5)

    //print the table data using the nested for loop in page by page

   

   const pages =  await page.locator('//ul[@id="pagination"]/li/a')

   for(let p=0;p<await pages.count();p++){

         
        if(p>0){
           await pages.nth(p).click()
     }
        for (let i = 0; i < await rows.count(); i++) {

            const row = rows.nth(i)
            const tds = await row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {

                console.log(await tds.nth(j).textContent());

            }
        }
   }


    
    

    //select the particular product
    // const selected = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'product 4'
    // })
    // await selected.locator('input').check()

    // how to select the multiple webtable checkbox by using function method


    await selectproducts(rows, page, 'product 2')
    await selectproducts(rows, page, 'product 5')
    await selectproducts(rows, page, 'product 1')

    await page.waitForTimeout(2000)


    async function selectproducts(rows, page, name) {
        const selected = rows.filter({
            has:await page.locator('td'),
            hasText: name
        })
        await selected.locator('input').check()
    }


    //print the table data 


})