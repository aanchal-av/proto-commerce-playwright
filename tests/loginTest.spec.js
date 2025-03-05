const {test,expect} = require('@playwright/test')

test.describe.configure({mode: 'parallel'}) //this is to parallely execute tests of the same spec file 
test('@Web browser context login test',async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    
})

test('@Web page context login test',async({page})=>{
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
    await page.waitForLoadState('networkidle') //this might be flaky
    //alternate wait method
    await page.locator('.card .card-footer').first().waitFor()
    console.log(await page.locator('.card .card-footer').first().textContent())
    console.log(await page.locator('.card .card-footer').nth(1).textContent())
})

test('select dropdown', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('select.form-control').selectOption('Consultant')
})

test('select radio button', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    await expect(page.locator('.radiotextsty').last()).toBeChecked()

})

test('validate blinking text', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('#username').fill('rahulshettyacademy')
    await page.locator('#password').fill('learning')
    await page.waitForLoadState('networkidle')
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class','blinkingText')
})

test('child window validation', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class','blinkingText')
    const documentLink = page.locator("[href*='documents-request']")
    
    const [newPage] = await Promise.all(
    [ 
    context.waitForEvent('page'),//listen for any new page
    documentLink.click() //new page opened
                  ])
     const text = await newPage.locator('.red').textContent()
     console.log(text)
})

test('validate the part of text', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class','blinkingText')
    const documentLink = page.locator("[href*='documents-request']")
    
    const [newPage] = await Promise.all(
    [ 
    context.waitForEvent('page'),//listen for any new page
    documentLink.click() //new page opened
                  ])
     const text = await newPage.locator('.red').textContent()
     console.log(text)
     const arrayText = text.split('@')
     const domain = arrayText[1].split(' ')[0]
     console.log(domain)
})

test('Apply the username from the fetched text', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class','blinkingText')
    const documentLink = page.locator("[href*='documents-request']")
    
    const [newPage] = await Promise.all(
    [ 
    context.waitForEvent('page'),//listen for any new page
    documentLink.click() //new page opened
                  ])
     const text = await newPage.locator('.red').textContent()
     console.log(text)
     const arrayText = text.split('@')
     const domain = arrayText[1].split(' ')[0]
     console.log(domain)
    await page.locator('#username').fill(domain)
})