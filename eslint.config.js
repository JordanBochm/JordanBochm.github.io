import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
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
    },
    {
        ignores: ['eslint.config.js']
    }
];
