import { defineConfig } from 'cypress';

export default defineConfig({
  execTimeout: 18000,
  defaultCommandTimeout: 300000,
  requestTimeout: 10000,
  pageLoadTimeout: 30000,
  responseTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'https://demoqa.com',
  },
});
