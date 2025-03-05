const {test,expect} = require('@playwright/test')

test('screenshot and visual test validation', async({page})=>{
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
  await page.locator('#displayed-text').screenshot({path: 'partialscreenshot.png'})
  await page.locator('#hide-textbox').click()
  await page.screenshot({path: 'screenshot.png'})
  

})  

//this test is disabled as there are difference in screenshot
// test('visual test validation', async({page})=>{
//   await page.goto('https://google.com/',{timeout: 30000})
  
//   expect(await page.screenshot()).toMatchSnapshot('landing.png')
    
  
//   })  