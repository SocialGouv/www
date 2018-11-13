module.exports = {
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",
  setupTestFrameworkScriptFile: "./setup.js",
  preset: "ts-jest",
  reporters: ["default", "jest-screenshot/reporter"]
};
