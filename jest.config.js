const customJestConfig = {
  clearMocks: true,

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testMatch: ['**/*.spec.js'],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],

  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/', 'test.spec.js'],

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@src/(.*)': '<rootDir>/src/$1',
    '@helpers/(.*)': '<rootDir>/helpers/$1',
    '@ui/(.*)': '<rootDir>/src/ui/$1'
  },

  testEnvironment: 'jsdom',

  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/', '/.next/']
}

// module.exports = createJestConfig(customJestConfig)
module.exports = customJestConfig
