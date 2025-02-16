export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      {
        useESM: true, // Ensure Jest supports ES Modules
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'], //  Treat TypeScript as ESM
  moduleNameMapper: {
    '^react-router-dom$':
      '<rootDir>/node_modules/react-router-dom/dist/index.js', //  Mock react-router-dom correctly
  },
};
