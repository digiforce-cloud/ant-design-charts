const { BaseJestConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  setupFilesAfterEnv: ['jest-extended', './jest.setup.js'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    '@digiforce-cloud/xflow': '<rootDir>/../../node_modules/@digiforce-cloud/xflow/dist/index.umd.js',
  },
};
