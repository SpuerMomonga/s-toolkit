import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default tsEslint.config(
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsParser,
    },
  },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ['**/node_modules', '**/build', '**/dist', '**/pnpm-lock.yaml', '.github', '.vscode'],
  },
  {
    rules: {
      eqeqeq: ['error', 'always'],
      'react/prop-types': 'off',
      'react/no-unknown-property': 'off',
      'react/react-in-jsx-scope': 'off',
      // 关闭不能使用 any
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    plugins: {
      prettier: pluginPrettier,
    },
  },
);
