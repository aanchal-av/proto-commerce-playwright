const {test,expect} = require('@playwright/test')


test('Client app login', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill('aanchal.av@dummy.com')
    await page.locator('#userPassword').fill('Test@1234')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
})

test.only('Add product to cart', async({page})=>{
    const products = page.locator('.card-body')
    const productName = 'ZARA COAT 3'
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill('aanchal.av@dummy.com')
    await page.locator('#userPassword').fill('Test@1234')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    const count= products.count()
    for(let i=0; i<count ; i++)
        {
       if(await products.nth(i).locator('b').textContent()=== productName)
       {
        await products.nth(i).locator('text=Add To Cart').click()
       }
 }
})