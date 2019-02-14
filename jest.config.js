module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '<rootDir>/dist/'
  ],
  coverageDirectory: "./coverage/",
  collectCoverage: true
};