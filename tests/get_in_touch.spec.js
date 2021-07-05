const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const {name, email, company, message} = require('../data/test-data.json')

test('Get In Touch - All fields Success', async ({ page }) => {
  const expectedMessage = "Thanks for reaching out!, We’ll be in touch shortly."
  const homePage = new HomePage(page);
  const successMessage = await homePage.getInTouch(name, email, message, company);
  expect(await page.isVisible(homePage.getInTouch_btn)).toBeTruthy()
  expect(successMessage).toBe(expectedMessage)
});

