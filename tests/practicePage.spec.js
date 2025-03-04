const {test,expect} = require('@playwright/test')

test.only('navigate back and forward ', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.goto('https://google.com')
    await page.goBack()
    await page.goForward()

})