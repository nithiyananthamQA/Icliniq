import {test,expect} from '@playwright/test'

test('Frame test ',async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')


    //using the frame function to locate the element 
    const frame = await page.frames() // gives total number of frames available in the page
    console.log(frame.length);
    
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

    await frame1?.fill('//input[@name="mytext1"]','First frame')
    

    const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})

    await frame2?.fill("//input[@name='mytext2']", 'Second frame')

    

    //using the framelocator function to locate the element 

    const frame3 = await page.frameLocator("frame[src='frame_4.html']").locator("//input[@name='mytext4']")
    await frame3.fill('Test four ')

    //
    await page.keyboard.press('')
})