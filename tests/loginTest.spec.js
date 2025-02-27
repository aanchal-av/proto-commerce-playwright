const {test,expect} = require('@playwright/test')

test('browser context login test',async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    
})

test('page context login test',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    await page.locator('#username').fill('rahulshettyacademy')
    await page.locator('#password').fill('learning')
    await page.locator('[name="terms"]').click()
    await page.locator('[type="submit"]').click()
})

test('validate the login error message', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('#username').fill('rahulshettyacmy')
    await page.locator('#password').fill('learing')
    await page.locator('[type="submit"]').click()
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText("Incorrect")
})

test('Add product to cart', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('#username').fill('rahulshettyacademy')
    await page.locator('#password').fill('learning')
    await page.locator('[type="submit"]').click()
    await page.waitForLoadState('networkidle')
    console.log(await page.locator('.card .card-footer').first().textContent())
    console.log(await page.locator('.card .card-footer').nth(1).textContent())
})

