import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./apps/",
  testMatch: /.*\.e2e\.tsx?/,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "All apps - Chrome",
      // expect: {
      //   timeout: DEFAULT_EXPECT_TIMEOUT,
      // },
      use: { ...devices["Desktop Chrome"] },
      /** If navigation takes more than this, then something's wrong, let's fail fast. */
      //navigationTimeout: DEFAULT_NAVIGATION_TIMEOUT,
    },

    {
      name: "All apps - Firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "All apps - Webkit",
      use: { ...devices["Desktop Safari"] },
    },

    {
      name: "Main website - Chrome",
      testDir: "./apps/web/",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "turbo dev",
    // url: "http://127.0.0.1:3000",
    url: "http://localhost:3000/", // It seems this must be http (not https) to work
    reuseExistingServer: !process.env.CI,
  },
});
