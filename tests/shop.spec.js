const {test,expect} = require('@playwright/test')



test('Client app login', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill('aanchal.av@dummy.com')
    await page.locator('#userPassword').fill('Test@1234')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
})

test('Add product to cart', async({page})=>{
    const products = page.locator('.card-body')
    const productName = 'ZARA COAT 3'
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill('aanchal.av@dummy.com')
    await page.locator('#userPassword').fill('Test@1234')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    const count= await products.count()
    for(let i=0; i<count ; i++)
        {
       if(await products.nth(i).locator('b').textContent()=== productName)
       {
        await products.nth(i).locator('text=Add To Cart').click()
       }
 }
})

test('Place order', async({page})=>{
    const products = page.locator('.card-body')
    const productName = 'ZARA COAT 3'
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill('aanchal.av@dummy.com')
    await page.locator('#userPassword').fill('Test@1234')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    const count= await products.count()
    for(let i=0; i<count ; i++)
        {
       if(await products.nth(i).locator('b').textContent()=== productName)
       {
        await products.nth(i).locator('text= Add To Cart').click()
       }
 }
  await page.locator('[routerlink*="/dashboard/cart"]').click()
  await page.locator('text= Checkout').click()
  await page.locator('[placeholder*="Select Country"]').pressSequentially('ind')
  const dropdown = page.locator('.ta-results')
  await dropdown.waitFor()
  const optionCount = await dropdown.locator('button').count()

for (let i=0; i < optionCount ; ++i){
   const text = await dropdown.locator("button").nth(i).textContent()

    if( text === " India"){
        await dropdown.locator("button").nth(i).click()
        break;
    }
   
}
await page.locator(".action__submit").click()
await expect(page.locator('.hero-primary')).toHaveText('  Thankyou for the order. ')

})