/**
 * 0 close
 * 1 warn
 * 2 error
 */

module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['react-app', 'react-app/jest', 'prettier'],
  rules: {
    'no-var': 2,
    'no-else-return': 2,
    'prefer-const': 2,
    'prefer-template': 2,

    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],

    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
  },
};
