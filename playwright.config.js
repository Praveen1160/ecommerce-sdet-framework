
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Location of automated tests
  testDir: './tests/ui',

  // Run tests in parallel where possible
  fullyParallel: true,

  // Prevent accidental test.only from passing CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers
  workers: process.env.CI ? 2 : undefined,

  // Test reporting
  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  // Shared test settings
  use: {
    baseURL: 'https://www.saucedemo.com',

    // SauceDemo uses data-test attributes
    testIdAttribute: 'data-test',

    // Capture evidence on failure
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },

  // Initial browser project
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});
