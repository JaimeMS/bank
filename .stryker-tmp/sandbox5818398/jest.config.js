/** @type {import('ts-jest').JestConfigWithTsJest} */
// @ts-nocheck

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.ts'],
};