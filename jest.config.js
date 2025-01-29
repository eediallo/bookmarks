/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jsdom", // ✅ Use jsdom for DOM testing
  setupFilesAfterEnv: ["./jest.setup.js"], // ✅ Load jest-dom setup
};

module.exports = config;
