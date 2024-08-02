# Playwright UI automation for A-walser.com

### The purpose of this project is to serve as a small example of my UI automation and CI/CD knowledge 
## Created in Playwright using Typescript, automated with Github Actions.

This project consists of 2 basic tests created around the page https://a-walser.com/form.html

The first test does a simple validation on the page title to confirm that the page is loaded.

The second test goes through each element of the form (textbox, radio button, dropdown, message box, and button) and validates they're working properly.

### Run Steps

From the base directory, run

> npx playwright test

To show the test report, run

> npx playwright show-report

Note #1: This project intentionally has a slowMo value of 3000 (3sec) to help follow along with the test execution while headless mode is disabled.

Note #2: To disable headless mode edit playwright.config.ts:42 from "headless: true" to "headless: false".

