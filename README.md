# Hemidi - Playwright Automation Test

This repository contains the automated test scripts. The tests are written using **Playwright** and **TypeScript**, targeting the [Sauce Demo](https://www.saucedemo.com/) e - commerce website.

## Test Scenarios Covered

The automation suite covers the following core functionalities:
1. **Failed Login:** Attempts to log in with a `locked_out_user` and verifies the exact error message displayed.
2. **Successful Checkout Flow:** Logs in with a `standard_user`, adds multiple items to the cart, validates the cart badge, completes the checkout process, and verifies the success message.

## ⚙️ Prerequisites

Before running the tests, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 16 or higher is recommended)

## 🛠️ Installation

1. Clone this repository to your local machine (or download the ZIP file):
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate into the project directory:
   ```bash
   cd hemidi-playwright-test
   ```
3. Install the required Node modules:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## ▶️ Running the Tests

You can run the tests using the following commands in your terminal:

- **Run all tests in headless mode (background):**
  ```bash
  npx playwright test
  ```
- **Run tests in UI mode (visualize execution):**
  ```bash
  npx playwright test --ui
  ```
- **View the HTML test report:**
  ```bash
  npx playwright show-report
  ```
