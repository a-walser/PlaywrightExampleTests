import { test, expect } from '@playwright/test';

const siteToTest='https://a-walser.com/form.html';

// Setup
test.beforeEach(async ({ page }) => {
  await page.goto(siteToTest); 
});

// Initial test to confirm the page loads and the title matches
test('has title', async ({ page }) => {
  await expect(page).toHaveTitle("Automation Test Form");
});

// Populate the fake form with information and press submit
test('populate form', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Want to sign up for my (non-existent) newsletter? Fill out the form below!' })).toBeVisible();

  // Name
  await page.fill('input[name="name"]', 'Andrew Walser');
  const nameValue = await page.inputValue('input[name="name"]');
  expect(nameValue).toBe('Andrew Walser');

  // Impression
  // Select the first radio button
  await page.check('input#very');
  let veryChecked = await page.isChecked('input#very');
  expect(veryChecked).toBe(true);
  
  // Select the second radio button
  await page.check('input#bestThingEver');
  let bestThingEverChecked = await page.isChecked('input#bestThingEver');
  await page.waitForTimeout(500); // Wait half a second
  
  // Check the state of both radio buttons again
  veryChecked = await page.isChecked('input#very');
  expect(veryChecked).toBe(false); 
  expect(bestThingEverChecked).toBe(true);

  // Country
  await page.selectOption('select#country', 'usa');
  const countryValue = await page.$eval('select#country', select => (select as HTMLSelectElement).value);
  expect(countryValue).toBe('usa');

  // Message
  await page.fill('textarea#message', 'This is a cool HTML form!');
  const messageValue = await page.inputValue('textarea#message');
  expect(messageValue).toBe('This is a cool HTML form!');
    
  // Subscribe? Yes!
  await page.check('#newsletter');

  // Submit button
  await page.click('input[type="submit"]');
});

