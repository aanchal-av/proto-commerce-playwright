const {test,expect}= require('@playwright/test')

test.only('validate the calendar',async({page})=>{
    
    const month= "February"
    const date="11"
    const year="2030"
    const expectedList = [month,date,year];
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    // await page.locator('.react-date-picker__inputGroup').click()
    await page.locator('.react-date-picker__calendar-button').click()
    await page.locator('.react-calendar__navigation__label').click()
    await page.locator('.react-calendar__navigation__label').click()
    // Select the correct year using an exact match
    await page.getByRole('button', { name: year, exact: true }).click();
    await page.getByText(month).click()
    await page.getByText(date).click()
    page.waitForLoadState('networkidle')
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index <inputs.length; index++)
    {
        const value =inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }



})