// npx eslint 'src/**' --fix
// npx eslint 'src/**/*.{ts,tsx}' --fix
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier', // eslint-config-prettier
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'], // 2. Error while loading rule '@typescript-eslint/dot-notation'
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // Missing return type on function
    'react/react-in-jsx-scope': 'off', // 'React' must be in scope when using JSX
    'import/no-absolute-path': 'off', // Do not import modules using an absolute path
  },
  settings: {
    react: {
      version: 'detect', // 1. React version not specified in eslint-plugin-react settings.
    },
  },
  ignorePatterns: ['.eslintrc.cjs'], // 3. Parsing error: ESLint was configured to run on `<tsconfigRootDir>/.eslintrc.cjs` using `parserOptions.project`
};
