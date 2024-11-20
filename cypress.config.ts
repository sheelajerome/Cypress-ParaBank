import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {

    reportPageTitle: 'ParaBank-Report',
  },

  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank",

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)

    },
  },
  experimentalStudio: true
});
