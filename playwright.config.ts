import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
  projects: [
  {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"], 
      },
    },
    
   /* {
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    */
  ],

  testMatch: ["test/checkoutDone.test.ts"], // Verify path
  use: {
  


    headless: false,
    screenshot: "on", // "only-on-failure" can be used as well
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000,
    },
  },

  retries: 0, // Increase retries if needed

  reporter: [
    ["dot"],
    ['allure-playwright'],
    ["json", { outputFile: "jsonReporters/jsonReport.json" }],
    ["html", { open: "always" }],
  ],
};

export default config;
