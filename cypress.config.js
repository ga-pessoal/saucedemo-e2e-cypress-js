const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  projectId: "saucedemo-e2e-cypress-js",
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/",
    setupNodeEvents(on, config) {

    },
  },
});
