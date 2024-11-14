const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = exports = {
  plugins: ["jest"],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],

  globals: {
    __dirname: false,
    module: false,
  },

  rules: {
    // Possible Errors
    "for-direction": WARN,
    "getter-return": [WARN, { allowImplicit: true }],
    "no-async-promise-executor": ERROR,
    "no-await-in-loop": ERROR,
    "no-compare-neg-zero": WARN,
    "no-cond-assign": [ERROR, "always"],
    "no-console": OFF,
    "no-constant-condition": [WARN, { checkLoops: false }],
    "no-debugger": WARN,
    "no-dupe-args": WARN,
    "no-dupe-keys": WARN,
    "no-duplicate-case": WARN,
    "no-empty": [WARN, { allowEmptyCatch: true }],
    "no-empty-character-class": WARN,
    "no-extra-boolean-cast": WARN,
    "no-extra-semi": WARN,
    "no-func-assign": WARN,
    "no-inner-declarations": WARN,
    "no-invalid-regexp": [WARN, { allowConstructorFlags: ["u", "y"] }],
    "no-irregular-whitespace": OFF,
    "no-obj-calls": WARN,
    "no-prototype-builtins": WARN,
    "no-regex-spaces": WARN,
    "no-sparse-arrays": WARN,
    "no-unexpected-multiline": WARN,
    "no-unreachable": WARN,
    "no-unsafe-negation": WARN,
    "use-isnan": WARN,
    "valid-typeof": WARN,

    // Best Practices
    "accessor-pairs": WARN,
    "block-scoped-var": WARN,
    curly: WARN,
    "dot-notation": [WARN, { allowKeywords: true }],
    "no-alert": WARN,
    "no-else-return": WARN,
    "no-eq-null": WARN,
    "no-eval": WARN,
    "no-extra-bind": WARN,
    "no-extra-label": WARN,
    "no-floating-decimal": WARN,
    "no-global-assign": WARN,
    "no-implied-eval": WARN,
    "no-loop-func": WARN,
    "no-multi-spaces": WARN,
    "no-new-func": WARN,
    "no-redeclare": WARN,
    "no-return-assign": OFF,
    "no-self-assign": WARN,
    "no-self-compare": WARN,
    "no-useless-concat": WARN,
    "no-useless-escape": WARN,
    "require-await": WARN,
    yoda: [WARN, "never", { exceptRange: true }],

    // Strict Mode
    strict: OFF,

    // Variables
    "no-shadow-restricted-names": WARN,
    "no-undef": WARN,
    "no-use-before-define": [WARN, { functions: false }],
    "no-unused-vars": WARN,

    // Stylistic Issues
    "array-bracket-newline": [WARN, "consistent"],
    "array-bracket-spacing": [WARN, "never"],
    "block-spacing": [WARN, "always"],
    "brace-style": WARN,
    "comma-spacing": [WARN, { before: false, after: true }],
    "comma-style": [WARN, "last"],
    "computed-property-spacing": [WARN, "never"],
    "eol-last": [WARN, "always"],
    "func-call-spacing": [WARN, "never"],
    "function-paren-newline": [WARN, "multiline-arguments"],
    "implicit-arrow-linebreak": [WARN, "beside"],
    indent: [WARN, 2, {
      VariableDeclarator: "first",
      FunctionDeclaration: { parameters: "first" },
      FunctionExpression: { parameters: "first" },
      CallExpression: { arguments: "first" },
      ImportDeclaration: 1,
      ObjectExpression: "first",
      ArrayExpression: "first",
      ignoreComments: true,
      ignoredNodes: ["ConditionalExpression"],
      outerIIFEBody: 0,
    }],
    "key-spacing": WARN,
    "keyword-spacing": WARN,
    "no-mixed-spaces-and-tabs": OFF,
    "no-multi-assign": WARN,
    "no-multiple-empty-lines": WARN,
    "no-unneeded-ternary": WARN,
    "no-whitespace-before-property": WARN,
    "object-curly-spacing": [WARN, "always"],
    "padded-blocks": [WARN, "never"],
    "quote-props": [WARN, "as-needed"],
    quotes: [WARN, "double", { allowTemplateLiterals: true }],
    semi: [WARN, "always"],
    "space-before-blocks": WARN,
    "space-before-function-paren": [WARN, "never"],
    "space-in-parens": [WARN, "never"],
    "space-infix-ops": WARN,
    "spaced-comment": [WARN, "always", { exceptions: ["-", "*", "+", "@ngInject", "/"] }],

    // ECMAScript 6
    "arrow-parens": [WARN, "as-needed"],
    "arrow-spacing": WARN,
    "constructor-super": WARN,
    "no-const-assign": WARN,
    "no-dupe-class-members": WARN,
    "no-duplicate-imports": WARN,
    "no-this-before-super": WARN,
    "no-var": WARN,
    "prefer-const": WARN,
    // "prefer-template": WARN,
    "template-curly-spacing": [WARN, "always"],

    // Vue.js
    "vue/multi-word-component-names": OFF,
    "vue/component-definition-name-casing": OFF, // TODO: wenn angular.js weg ist, soll WARN sein

    // Jest
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
  env: {
    es6: true,
    browser: true,
    "jest/globals": true,
  }
};
