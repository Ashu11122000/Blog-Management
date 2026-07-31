import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",

  testMatch: "**/*.spec.ts",

  fullyParallel: true,

  forbidOnly: Boolean(process.env.CI),

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : 4,

  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "playwright-report" }],
    ["junit", { outputFile: "test-results/results.xml" }],
  ],

  timeout: 30_000,

  expect: {
    timeout: 10_000,
  },

  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    actionTimeout: 15_000,

    navigationTimeout: 30_000,

    ignoreHTTPSErrors: true,
  },

  webServer: {
    command: "npm run dev",

    url: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",

    reuseExistingServer: !process.env.CI,

    timeout: 120_000,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 7"],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        ...devices["iPhone 15"],
      },
    },
  ],

  outputDir: "test-results",
});
