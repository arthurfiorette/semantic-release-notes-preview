const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

const esModules = [
  'semantic-release',
  // "lodash-es",
  // "env-ci",
  // "execa",
  // "strip-final-newline",
  // "npm-run-path",
  // "path-key",
].join('|');

module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: '<rootDir>/tests/reports/coverage',
  coveragePathIgnorePatterns: ['index\\.ts$', '\\.d\\.ts$'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/', `/node_modules/(?!${esModules})`],
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'node',
};
