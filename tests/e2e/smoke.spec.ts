import { expect, test } from '@playwright/test';

test('homepage renders a primary heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1').first()).toBeVisible();
});

test('contact page renders the contact form', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.locator('form[data-contact-form]').first()).toBeVisible();
});
