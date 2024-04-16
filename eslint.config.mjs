import reactPlugin from 'eslint-plugin-react';
import jsxPlugin from 'eslint-plugin-jsx-a11y';
import babelEslintParser from '@babel/eslint-parser';

export default {
  // Specify the parser from Babel to handle modern JS and JSX
  languageOptions: {
    ecmaVersion: 'latest', // you can specify a specific version like 2021, 2022, etc.
    sourceType: 'module',
  },

  // Extended configurations from plugins
  // Here you merge the recommended rules from imported plugins directly
  ...reactPlugin.configs.recommended,
  ...{{plugins: jsxPlugin.configs.recommended[0].join(' ')}, ...jsxPlugin.configs.recommended},

  // Custom rules configuration
  rules: {
    'react/jsx-uses-react': 'off', // not needed for React 17+ with the new JSX transform
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off', // not needed for React 17+ with the new JSX transform
    // Add or modify additional rules here
  },

  // Settings for react plugin to auto-detect React version
  settings: {
    react: {
      version: 'detect', // Auto-detect the react version
    },
  },
};
