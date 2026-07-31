import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  testMatch: [
    "<rootDir>/tests/unit/**/*.test.ts",
    "<rootDir>/tests/unit/**/*.test.tsx",
    "<rootDir>/tests/unit/**/*.spec.ts",
    "<rootDir>/tests/unit/**/*.spec.tsx",
  ],

  collectCoverage: true,

  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/generated/**",
    "!src/**/index.ts",
    "!src/app/**",
    "!src/middleware.ts",
  ],

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  coverageReporters: ["text", "lcov", "html"],

  clearMocks: true,

  restoreMocks: true,

  resetMocks: true,

  verbose: true,

  moduleDirectories: ["node_modules", "<rootDir>"],

  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/playwright-report/",
    "<rootDir>/test-results/",
  ],
};

export default createJestConfig(config);
