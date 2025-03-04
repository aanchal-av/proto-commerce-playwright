const {test,expect} = require('@playwright/test')

test('navigate back and forward ', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.goto('https://google.com')
    await page.goBack()
    await page.goForward()

})

test('validate the hidden and non hidden elements', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#hide-textbox').click()
    // await page.locator('input[style="display: none;"]')
    await page.locator('#displayed-text').isHidden()
    await page.locator('#show-textbox').click()
    await page.locator('#displayed-text').isVisible()

})

test('validate the pop up', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#alertbtn').click()
    page.on('dialog',dialog=> dialog.accept)
})

