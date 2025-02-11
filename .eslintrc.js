module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile : false,
    babelOptions: {
      "presets": ["@babel/preset-react"]
    },
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": ["warn"],
    "react/display-name": ["warn"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
