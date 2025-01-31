import { defineConfig } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:3001',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: [
    {
      command: 'yarn dev',
      port: 3001,
      timeout: 60_000,
      reuseExistingServer: true,
    },
  ],
});
