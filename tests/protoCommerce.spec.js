const {test,expect} = require('@playwright/test')



test.only('proto commerce app login', async({page})=>{
page.goto('https://rahulshettyacademy.com/angularpractice/')

//verify the labels using getByLabel
page.getByLabel('Check me out if you Love IceCreams!').click()
page.getByLabel('Employed').click()

})