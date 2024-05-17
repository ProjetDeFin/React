// Import necessary plugins
import react from 'eslint-plugin-react';
import jsxAccessibility from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      react: react,
      jsxAccessibility: jsxAccessibility,
      import: importPlugin,
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-indent': ['error', 2],
      'react/react-in-jsx-scope': 'off', // For React 17+ JSX transform
      // Additional rules from the Airbnb config would go here, manually added
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
      },
    },
  },
  // React Router specific rules if there are any customization needed
  {
    files: ['**/routes/**/*.js', '**/routes/**/*.jsx'],
    rules: {
      // Rules specific to your routing components if needed
    },
  },
  // Ensure other file types or specific configurations are covered
  // For example, testing frameworks or specific libraries
];
