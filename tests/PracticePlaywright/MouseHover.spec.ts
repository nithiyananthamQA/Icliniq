import {test,expect} from "@playwright/test"

test('Mouse Hover',async ({page}) => {
    
    await page.goto('https://staging.icliniq.com/')

    const ConsultHover = await page.locator('//a[@class="nav-menu-items nav-link dropdown-toggle"]')

    await ConsultHover.hover()

    const ChatHover = await page.locator('//a[@class="nav-menu-items nav-link dropdown-toggle"]')

    await ChatHover.hover()

})