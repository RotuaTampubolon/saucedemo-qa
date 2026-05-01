const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Base URL supaya tidak perlu tulis full URL di setiap test
    baseUrl: 'https://www.saucedemo.com',

    // Simpan screenshot di folder screenshots/
    screenshotsFolder: 'screenshots',

    // Simpan video di folder videos/
    videosFolder: 'videos',

    // Otomatis screenshot saat test FAIL
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {},
  },
})