const {test,expect} = require('@playwright/test')



test('using getByLabel operate on elements', async({page})=>{
await page.goto('https://rahulshettyacademy.com/angularpractice/')

//verify the labels using getByLabel
await page.getByLabel('Check me out if you Love IceCreams!').click()
await page.getByLabel('Employed').click()
await page.getByLabel('Gender').selectOption('Female')

})

test('using getByPlaceholder, getByText, getByRole perform chaining methods', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    
    //verify using getByPlaceholder
    await page.getByPlaceholder('Password').fill('Test@1234')

    //verify using getByRole
    await page.getByRole('button',{name: 'Submit'}).click()
    
    //verify using getByText
    await page.getByText(" The Form has been submitted successfully!.").isVisible()
})

test('validate shop page and chain methods', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.getByText('Shop').click()
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole('button').click()


})