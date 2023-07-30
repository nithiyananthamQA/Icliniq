import {test,expect} from "@playwright/test"

let page
test.beforeAll(async()=>{

    console.log('Before all')
})

test.afterAll(async()=>{

    console.log('after all')
})

test.beforeEach(async()=>{

    console.log('before each')
})

test.afterEach(async()=>{

    console.log('after each')
})

test.describe.skip('Group 1 ',()=>{ //you can skip the particular test in all other group
    test('Test',async () => {
        console.log('test 1 ');
        
    })
    test('Test2',async () => {
        console.log('test 2 ');
        
    })
})

test.describe.only('Group 2 ',()=>{  // use only word to run the particular group and it can be apply for the particular test also
    test('Test3',async () => {
        console.log('test 3 ');
        
    })
    test('Test4',async () => {
        console.log('test 4 ');
        
    })
})