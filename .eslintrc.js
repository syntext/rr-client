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
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single']
    },
};
