module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended' // Make sure this is always the last element in the array.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['**/tsconfig.json']
    },
    plugins: [
        'react',
        'react-hooks',
        'simple-import-sort',
        '@typescript-eslint',
        'jsx-a11y',
        'prettier'
    ],
    rules: {
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                ignoreCase: true
            }
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        semi: 'off',
        'react/react-in-jsx-scope': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'react/function-component-definition': 'off',
        'max-lines': ['error', { skipBlankLines: true, skipComments: true }],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/']
            }
        }
    },
    ignorePatterns: ['**/*.css', '**/*.svg', '**/*eslintrc.js']
};
