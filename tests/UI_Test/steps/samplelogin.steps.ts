import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ samplelogInPage }, url) => {
  await samplelogInPage.navigateToURL(url);
});

Given('I click on My account', async ({ samplelogInPage }) => {
  await samplelogInPage.clickMYAccount();
});

Given('I enter E-Mail Address {string}',
  async ({ samplelogInPage }, emailAddress) => {
    await samplelogInPage.enterEmailAddress(emailAddress);
  }
);

Given('I enter password {string}', async ({ samplelogInPage }, password) => {
  await samplelogInPage.enterPassword(password);
});

When('I click on submit button', async ({ samplelogInPage }) => {
  await samplelogInPage.submitForm();
});

Then('I should verify url contains {string}', async ({ page }, looged_URL) => {
  await expect(page).toHaveURL(new RegExp(looged_URL));
});

Then(
  'I should verify user is not able to login and url contains {string}',
  async ({ page }, unlooged_URL) => {
    await expect(page).toHaveURL(new RegExp(unlooged_URL));
  }
);