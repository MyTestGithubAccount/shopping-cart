// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const path = require('path');

const testResultsFolder = path.resolve(__dirname, '../e2e/out/');
const testResultsJsonFile = testResultsFolder + `/e2e-test-results.json`;
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/features/*.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      'args': ['disable-infobars=true'],
  }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    strict: true,
    format: [
      'json:' + testResultsJsonFile, 'node_modules/cucumber-pretty'
    ],
    require: [
      './src/steps/*.ts',
      './src/lib/**/*.ts'
    ]
  },
  onPrepare() {

  }
};