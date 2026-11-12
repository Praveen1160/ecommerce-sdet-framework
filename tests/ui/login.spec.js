
import { test, expect } from '@playwright/test';

// Run before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Test 1: Successful login
test('should login successfully with valid credentials', async ({ page }) => {

  await page.getByTestId('username').fill('standard_user');

  await page.getByTestId('password').fill('secret_sauce');

  await page.getByTestId('login-button').click();

  // Verify inventory page is displayed
  await expect(page.locator('.title')).toHaveText('Products');

  // Verify product listing is visible
  await expect(page.locator('.inventory_container')).toBeVisible();

  // Verify standard user's inventory contains six products
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

// Test 2: Invalid username
test('should display error for invalid username', async ({ page }) => {

  await page.getByTestId('username').fill('invalid_user');

  await page.getByTestId('password').fill('secret_sauce');

  await page.getByTestId('login-button').click();

  // Verify error message
  await expect(page.getByTestId('error')).toBeVisible();

  await expect(page.getByTestId('error')).toContainText(
    'Username and password do not match'
  );
});

// Test 3: Locked-out user
test('should prevent login for locked out user', async ({ page }) => {

  await page.getByTestId('username').fill('locked_out_user');

  await page.getByTestId('password').fill('secret_sauce');

  await page.getByTestId('login-button').click();

  // Verify locked-out error
  await expect(page.getByTestId('error')).toBeVisible();

  await expect(page.getByTestId('error')).toContainText(
    'locked out'
  );
});
