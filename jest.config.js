/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"], 
  transform: {
    "^.+\\.m?js$": "babel-jest", // Allow ES modules with Jest
  },
};

export default config;
