const {test,expect} = require('@playwright/test')

test.only('screenshot and visual test validation', async({page})=>{
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
  await page.locator('#displayed-text').screenshot({path: 'partialscreenshot.png'})
  await page.locator('#hide-textbox').click()
  await page.screenshot({path: 'screenshot.png'})
  

})  