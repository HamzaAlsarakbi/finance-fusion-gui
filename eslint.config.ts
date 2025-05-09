import * as tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginSonarjs from 'eslint-plugin-sonarjs';

export default {
  ignores: ['dist', 'build', '*.config.*'],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: parser,
    parserOptions: {
      project: ['./tsconfig.json'],
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
    react: pluginReact,
    'react-hooks': pluginReactHooks,
    import: pluginImport,
    prettier: pluginPrettier,
    'unused-imports': pluginUnusedImports,
    'react-refresh': pluginReactRefresh,
    sonarjs: pluginSonarjs,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'no-console': 'warn',
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^_',
    //     varsIgnorePattern: '^React$',
    //   },
    // ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
