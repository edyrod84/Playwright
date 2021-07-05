const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const {name, email, company, message} = require('../data/test-data.json')

test('Get In Touch - Fields Nama and E-mail empty', async ({ page }) => {
  const expectedMessage = "Thanks for reaching out!, We’ll be in touch shortly."
  const homePage = new HomePage(page);
  const errorMessage = async () => await homePage.getInTouch(' ', ' ', message, company)
  await expect(errorMessage).rejects.toThrowError('Required fields: Name*, E-mail*')
});