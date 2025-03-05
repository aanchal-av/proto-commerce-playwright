const {test,expect,request} = require('@playwright/test')
const loginPayload = {userEmail: 'aanchal.av@dummy.com', userPassword: 'Test@1234'}
let token
test.beforeAll(  async()=>{
    
   const apiContext= await request.newContext()
   const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
    {
        data: loginPayload
    }
   )
   expect(loginResponse.ok()).toBeTruthy()
   const loginResponseJson = loginResponse.json()
    token = loginResponseJson.token

})


test.beforeEach( ()=>{


})


test('Client app login', async({page})=>{
    page.addInitScript(value =>{
        window.localStorage.setItem('token',value)
    }, token)
    await page.goto('https://rahulshettyacademy.com/client')





})