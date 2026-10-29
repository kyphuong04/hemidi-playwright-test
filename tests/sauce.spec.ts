import { test, expect } from '@playwright/test';

test.describe('Sauce Demo Automation Tests', () => {

    // Test case 1: Loged in failed with locked out user
    test('Failed login with locked out user', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        // Fill in the login form with locked out user credentials
        await page.locator('[data-test="username"]').fill('locked_out_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // Using Assertion (expect) to check the error message, DO NOT use waitForTimeout
        const errorMsg = page.locator('[data-test="error"]');
        await expect(errorMsg).toBeVisible();
        await expect(errorMsg).toContainText('Epic sadface: Sorry, this user has been locked out.');
    });

    // Test case 2: Add to cart and successful checkout
    test('Add to cart and successful checkout', async ({ page }) => {
        // Fill in the login form with standard user credentials
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // Ensure we are on the inventory page
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // Add 2 products to the cart
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        // Check that the cart icon displays the number 2
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('2');

        // Go to the cart and proceed to Checkout
        await page.locator('.shopping_cart_link').click();
        await page.locator('[data-test="checkout"]').click();

        // Fill in personal information
        await page.locator('[data-test="firstName"]').fill('Ky Phuong');
        await page.locator('[data-test="lastName"]').fill('Nguyen Pham');
        await page.locator('[data-test="postalCode"]').fill('700000');
        await page.locator('[data-test="continue"]').click();

        // Click Finish
        await page.locator('[data-test="finish"]').click();

        // Check the success message
        const completeHeader = page.locator('.complete-header');
        await expect(completeHeader).toBeVisible();
        await expect(completeHeader).toHaveText('Thank you for your order!');
    });
});