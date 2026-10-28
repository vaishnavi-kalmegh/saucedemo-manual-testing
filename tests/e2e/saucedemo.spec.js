const { test, expect } = require('@playwright/test');

const standardUser = 'standard_user';
const lockedUser = 'locked_out_user';
const password = 'secret_sauce';

async function signIn(page, username = standardUser) {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
}

test('standard user can sign in and see inventory', async ({ page }) => {
  await signIn(page);
  await expect(page).toHaveURL(/inventory\.html$/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('locked-out user receives a login error', async ({ page }) => {
  await signIn(page, lockedUser);
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Sorry, this user has been locked out');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test('inventory can be sorted by price from low to high', async ({ page }) => {
  await signIn(page);
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map((price) => Number(price.replace('$', '')));
  expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
});

test('user can add an item to the cart and see it in the cart', async ({ page }) => {
  await signIn(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
});

test('user can complete checkout with valid information', async ({ page }) => {
  await signIn(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('QA');
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="postalCode"]').fill('411001');
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
  await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
});

test('checkout requires a postal code', async ({ page }) => {
  await signIn(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('QA');
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');
});
