module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  rules: {
    "max-len": 0,
    "no-underscore-dangle": 1,
    "no-use-before-define": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "no-unused-vars": [2, {
      "argsIgnorePattern": "^_"
    }],
    "object-curly-newline": [2, {
      "ImportDeclaration": "never",
      "ExportDeclaration": "never"
    }],
    "no-param-reassign": ["error", { "props": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "globals": {
    "window": true,
    "document": true,
  }
};
