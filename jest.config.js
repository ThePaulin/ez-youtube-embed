module.exports = {
  preset: 'ts-jest', // If using TypeScript; otherwise, skip this
  testEnvironment: 'jsdom', // Simulates a browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|js)$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
}
