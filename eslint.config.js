const globals = require('globals');
const pluginJs = require('@eslint/js');

module.exports = [
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'script',
            globals: {
                ...globals.browser
            }
        }
    },
    pluginJs.configs.recommended,
    {
        rules: {
            'strict': ['error', 'global'],
            'no-var': 'error',
            'prefer-const': 'error',
            'eqeqeq': 'error'
        }
    }
];
