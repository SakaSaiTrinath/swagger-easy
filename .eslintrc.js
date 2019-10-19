module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'import'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'no-shadow': 'off',
    camelcase: 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/prefer-stateless-function': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-filename-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'import/default': 'off',
    'import/extensions': ['off'],
    'import/no-duplicates': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'error',
    'import/imports-first': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'warn',
    'global-require': 'off',
    'no-case-declarations': 'off',
    'no-underscore-dangle': 'off',
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'no-else-return': ['error', { allowElseIf: true }],
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'max-len': ['error', 120],
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
  },
};