// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 2,
  // workers: 1, //this is number instances which runs the spec file parallely
  expect:{
    timeout: 5000,
  },

  reporter: 'html',

  projects: [
    {
      name: 'Safari',
      use: {

        browserName: 'webkit',
        headless :false,
        screenshot: 'on',
        trace: 'on',
       ...devices['iPhone 11']
      },
    },

    {
      name: 'Chrome',
      use: {

        browserName: 'chromium',
        headless :false,
        screenshot: 'on',
        trace: 'on',
        viewport: {width:720,height:720}
      },


    }
  ]
  

});

