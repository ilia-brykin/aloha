import globals from "globals";
import importPlugin from "eslint-plugin-import";
import pluginJest from "eslint-plugin-jest";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";

const OFF = 0;
const WARN = 1;
const ERROR = 2;


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [
      "**/*.{js,mjs,cjs,vue}",
    ],
    ignores: [
      "docs/vite.config.mjs",
      "vite.lib.config.mjs",
    ],
    // vite.config.mjs
    plugins: {
      jest: pluginJest,
      "@stylistic": stylistic,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...pluginJest.environments.globals.globals,
      }
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  // importPlugin.flatConfigs.recommended,
  {
    rules: {
      // @stylistic
      "@stylistic/array-bracket-newline": [WARN, "consistent"],
      "@stylistic/array-bracket-spacing": [WARN, "never"],
      "@stylistic/array-element-newline": [WARN, "consistent"],
      "@stylistic/arrow-parens": [WARN, "as-needed"],
      "@stylistic/arrow-spacing": WARN,
      "@stylistic/block-spacing": [WARN, "always"],
      "@stylistic/brace-style": WARN,
      "@stylistic/comma-dangle": [
        WARN, {
          objects: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
          importAttributes: "always-multiline",
          dynamicImports: "always-multiline",
          arrays: "always-multiline",
          imports: "always-multiline",
        },
      ],
      "@stylistic/comma-spacing": [
        WARN,
        {
          before: false,
          after: true,
        },
      ],
      "@stylistic/comma-style": [WARN, "last"],
      "@stylistic/computed-property-spacing": [WARN, "never"],
      "@stylistic/curly-newline": [WARN, {
        "IfStatementConsequent": "always",
        "IfStatementAlternative": "always",
        "ForStatement": "always",
        "ForInStatement": "always",
        "ForOfStatement": "always",
        "WhileStatement": "always",
        "DoWhileStatement": "always",
        "SwitchStatement": "always",
        "SwitchCase": "always",
        "TryStatementBlock": "always",
        "TryStatementHandler": "always",
        "TryStatementFinalizer": "always",
        "BlockStatement": "always",
        "ArrowFunctionExpression": { minElements: 1 },
        "FunctionDeclaration": { minElements: 1 },
        "FunctionExpression": "always",
        "Property": "always",
        "ClassBody": "always",
        "StaticBlock": "always",
      }],
      "@stylistic/dot-location": [WARN, "property"],
      "@stylistic/eol-last": [WARN, "always"],
      "@stylistic/function-call-spacing": [WARN, "never"],
      "@stylistic/function-paren-newline": [WARN, "multiline-arguments"],
      "@stylistic/generator-star-spacing": [
        WARN,
        {
          "before": true,
          "after": false,
        },
      ],
      "@stylistic/implicit-arrow-linebreak": [WARN, "beside"],
      "@stylistic/indent": [
        WARN,
        2,
        {
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
        },
      ],
      "@stylistic/indent-binary-ops": [WARN, 2],
      "@stylistic/key-spacing": WARN,
      "@stylistic/keyword-spacing": WARN,
      "@stylistic/line-comment-position": OFF,
      "@stylistic/linebreak-style": OFF,
      "@stylistic/lines-around-comment": [
        WARN,
        {
          beforeBlockComment: true,
          afterBlockComment: false,
          beforeLineComment: false,
          afterLineComment: false,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],
      "@stylistic/max-len": OFF,
      "@stylistic/max-statements-per-line": [WARN, { "max": 2 }],
      "@stylistic/multiline-comment-style": [WARN, "starred-block"],
      "@stylistic/multiline-ternary": [WARN, "always-multiline"],
      "@stylistic/new-parens": WARN,
      "@stylistic/no-extra-semi": WARN,
      "@stylistic/no-floating-decimal": WARN,
      "@stylistic/no-mixed-spaces-and-tabs": WARN,
      "@stylistic/no-multi-spaces": WARN,
      "@stylistic/no-multiple-empty-lines": [WARN, { max: 2 }],
      "@stylistic/no-tabs": WARN,
      "@stylistic/no-trailing-spaces": WARN,
      "@stylistic/no-whitespace-before-property": WARN,
      "@stylistic/object-curly-spacing": [WARN, "always"],
      "@stylistic/object-property-newline": [WARN, { allowAllPropertiesOnSameLine: true }],
      "@stylistic/padded-blocks": [WARN, "never"],
      "@stylistic/quote-props": [WARN, "as-needed"],
      "@stylistic/quotes": [WARN, "double", { allowTemplateLiterals: true }],
      "@stylistic/rest-spread-spacing": [WARN, "never"],
      "@stylistic/semi": [WARN, "always"],
      "@stylistic/semi-spacing": WARN,
      "@stylistic/semi-style": [WARN, "last"],
      "@stylistic/space-before-blocks": WARN,
      "@stylistic/space-before-function-paren": [WARN, "never"],
      "@stylistic/space-in-parens": [WARN, "never"],
      "@stylistic/space-infix-ops": WARN,
      "@stylistic/space-unary-ops": [WARN, { words: true, nonwords: false }],
      "@stylistic/spaced-comment": [WARN, "always", { exceptions: ["-", "*", "+", "@ngInject", "/"] }],
      "@stylistic/switch-colon-spacing": WARN,
      "@stylistic/template-curly-spacing": [WARN, "always"],

      // import
      // "import/namespace": OFF,
      // "import/no-unresolved": OFF,
      // "import/export": WARN,
      // "import/no-empty-named-blocks": WARN,
      // "import/no-mutable-exports": WARN,
      // "import/no-named-as-default": WARN,
      // "import/no-named-as-default-member": WARN,
      // "import/order": [
      //   "error",
      //   {
      //     groups: [
      //       "builtin", // 1. Imports from "vue" and other built-in modules
      //       "external", // 2. Imports from external libraries like "aloha-vue"
      //     ],
      //     pathGroups: [
      //       {
      //         pattern: "vue", // Group for "vue" imports
      //         group: "builtin",
      //         position: "before",
      //       },
      //       {
      //         pattern: "aloha-vue", // Group for "aloha-vue" imports
      //         group: "builtin",
      //         position: "before", // Ensure it's in the same group as "vue"
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: [
      //       "builtin",
      //       // "builtin", "unknown"
      //     ], // Exclude "builtin" from path group checks
      //     alphabetize: {
      //       order: "asc", // Alphabetize imports within each group
      //       caseInsensitive: true, // Ignore case sensitivity while sorting
      //     },
      //     "newlines-between": "always-and-inside-groups", // Enforce a blank line after "aloha-vue" but not between related imports
      //   },
      // ],

      // Possible Problems
      "constructor-super": WARN,
      "for-direction": WARN,
      "getter-return": [WARN, { allowImplicit: true }],
      "no-async-promise-executor": ERROR,
      "no-await-in-loop": ERROR,
      "no-class-assign": WARN,
      "no-compare-neg-zero": WARN,
      "no-cond-assign": [ERROR, "always"],
      "no-const-assign": WARN,
      "no-constant-binary-expression": WARN,
      "no-constant-condition": [WARN, { checkLoops: false }],
      "no-constructor-return": WARN,
      "no-debugger": WARN,
      "no-dupe-args": WARN,
      "no-dupe-class-members": WARN,
      "no-dupe-else-if": WARN,
      "no-dupe-keys": WARN,
      "no-duplicate-case": WARN,
      "no-duplicate-imports": WARN,
      "no-empty-character-class": WARN,
      "no-empty-pattern": WARN,
      "no-ex-assign": WARN,
      "no-fallthrough": WARN,
      "no-func-assign": WARN,
      "no-import-assign": WARN,
      "no-inner-declarations": WARN,
      "no-invalid-regexp": [WARN, { allowConstructorFlags: ["u", "y"] }],
      "no-irregular-whitespace": OFF,
      "no-loss-of-precision": WARN,
      "no-obj-calls": WARN,
      "no-prototype-builtins": WARN,
      "no-self-assign": WARN,
      "no-self-compare": WARN,
      "no-sparse-arrays": WARN,
      "no-template-curly-in-string": WARN,
      "no-this-before-super": WARN,
      "no-undef": WARN,
      "no-unexpected-multiline": WARN,
      "no-unreachable": WARN,
      "no-unsafe-finally": WARN,
      "no-unsafe-negation": WARN,
      "no-unsafe-optional-chaining": WARN,
      "no-unused-vars": [WARN, { caughtErrors: "none" }],
      "no-use-before-define": [WARN, { functions: false }],
      "no-useless-assignment": WARN,
      "use-isnan": WARN,
      "valid-typeof": WARN,

      // Suggestions
      "accessor-pairs": WARN,
      "block-scoped-var": WARN,
      curly: WARN,
      "dot-notation": [WARN, { allowKeywords: true }],
      eqeqeq: [WARN, "always"],
      "no-alert": WARN,
      "no-bitwise": WARN,
      "no-case-declarations": WARN,
      "no-console": OFF,
      "no-delete-var": WARN,
      "no-else-return": WARN,
      "no-empty": [WARN, { allowEmptyCatch: true }],
      "no-empty-function": OFF,
      "no-empty-static-block": WARN,
      "no-eq-null": WARN,
      "no-eval": WARN,
      "no-extra-bind": WARN,
      "no-extra-boolean-cast": WARN,
      "no-extra-label": WARN,
      "no-global-assign": WARN,
      "no-implied-eval": WARN,
      "no-lone-blocks": WARN,
      "no-lonely-if": WARN,
      "no-loop-func": WARN,
      "no-multi-assign": WARN,
      "no-multi-str": WARN,
      "no-new-func": WARN,
      "no-object-constructor": WARN,
      "no-octal": WARN,
      "no-redeclare": WARN,
      "no-regex-spaces": WARN,
      "no-return-assign": OFF,
      "no-shadow-restricted-names": WARN,
      "no-unneeded-ternary": WARN,
      "no-unused-labels": WARN,
      "no-useless-concat": WARN,
      "no-useless-escape": WARN,
      "no-var": WARN,
      "no-with": WARN,
      "prefer-const": WARN,
      "require-await": WARN,
      "sort-imports": [WARN, {
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        ignoreCase: true,
        ignoreDeclarationSort: true,
      }],
      strict: OFF,
      yoda: [WARN, "never", { exceptRange: true }],


      // Vue.js
      "vue/multi-word-component-names": WARN,
      "vue/component-definition-name-casing": WARN,

      // Jest
      "jest/no-disabled-tests": WARN,
      "jest/no-focused-tests": ERROR,
      "jest/no-identical-title": ERROR,
      "jest/prefer-to-have-length": WARN,
      "jest/valid-expect": ERROR,
    },
  },
];
