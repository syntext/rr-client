module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'airbnb',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        /* See: https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v17.1.0/packages/eslint-config-airbnb/rules/react.js */
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': ['off'],
        'react/jsx-tag-spacing': ['error', {
            'beforeClosing': 'never',
            'beforeSelfClosing': 'never',
        }],
        'react/no-set-state': 'off',
        'react/no-unused-state': 'warn',
        'jsx-quotes': ['error', 'prefer-single'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'no-unused-vars': ['warn'],
    },
};
