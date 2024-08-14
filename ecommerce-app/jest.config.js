module.exports = {
    roots: ['<rootDir>/src'], // Specifies the root directory for Jest to look for tests
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // Patterns Jest uses to detect test files
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Extensions Jest will look for
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Use babel-jest to transpile JavaScript files
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Optional: If you need to set up some test environment configuration
  };
  