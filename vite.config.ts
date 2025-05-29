import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",          // Use jsdom for DOM testing
    globals: true,                 // Enable global test functions (describe, it, expect, etc.)
    setupFiles: "./src/__tests__/setup.ts", // Load MSW setup
    coverage: {
      provider: "v8",              // Use V8 for coverage (faster)
      reporter: ["text", "lcov"],  // Text for CLI, lcov for HTML report
    },
  },
});
