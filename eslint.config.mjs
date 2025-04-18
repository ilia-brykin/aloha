import globals from "globals";
import pluginJest from "eslint-plugin-jest";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginVuePug from "eslint-plugin-vue-pug";
import stylistic from "@stylistic/eslint-plugin";
import groupImportsPlugin from "eslint-plugin-import-group";

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
      "@stylistic": stylistic,
      "vue-pug": pluginVuePug,
      "group-imports": groupImportsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        __dirname: false,
        module: false,
        require: false,
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  // importPlugin.flatConfigs.recommended,
  {
    rules: {
      ...pluginVuePug.configs["vue3-recommended"].rules,
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
        IfStatementConsequent: "always",
        IfStatementAlternative: "always",
        ForStatement: "always",
        ForInStatement: "always",
        ForOfStatement: "always",
        WhileStatement: "always",
        DoWhileStatement: "always",
        SwitchStatement: "always",
        SwitchCase: "always",
        TryStatementBlock: "always",
        TryStatementHandler: "always",
        TryStatementFinalizer: "always",
        BlockStatement: "always",
        ArrowFunctionExpression: { minElements: 1 },
        FunctionDeclaration: { minElements: 1 },
        FunctionExpression: "always",
        Property: "always",
        ClassBody: "always",
        StaticBlock: "always",
      }],
      "@stylistic/dot-location": [WARN, "property"],
      "@stylistic/eol-last": [WARN, "always"],
      "@stylistic/function-call-spacing": [WARN, "never"],
      "@stylistic/function-paren-newline": [WARN, "multiline-arguments"],
      "@stylistic/generator-star-spacing": [
        WARN,
        {
          before: true,
          after: false,
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
      "@stylistic/max-statements-per-line": [WARN, { max: 2 }],
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

      // import-simple
      "group-imports/named-imports": ["warn", {
        sort: "asc",
        newline: true,
      }],
      "group-imports/group-imports": [
        WARN,
        {
          groups: [
            {
              name: "Core Imports",
              patterns: [
                {
                  exact: "vue",
                },
                {
                  exact: "vue-router",
                },
                {
                  exact: "@jest/globals",
                },
                {
                  exact: "@vue/test-utils",
                },
                {
                  regex: "/index$",
                },
              ],
            },
            {
              name: "Components",
              patterns: [
                {
                  regex: ".vue$",
                },
                {
                  regex: "([A-Za-z0-9_]+)/\\1$",
                },
              ],
              sort: "asc",
            },
            {
              name: "CompositionAPI",
              patterns: [
                {
                  includes: "API",
                },
              ],
              sort: "asc",
            },
            {
              name: "Third-Party Libraries",
              patterns: [
                {
                  exact: "_rest_",
                  sort: "asc",
                },
                {
                  exact: "lodash-es",
                },
              ],
            },
          ],
          emptyLinesBetweenGroups: 1,
        },
      ],

      /*
       * import
       * "import/namespace": OFF,
       * "import/no-unresolved": OFF,
       * "import/export": WARN,
       * "import/no-empty-named-blocks": WARN,
       * "import/no-mutable-exports": WARN,
       * "import/no-named-as-default": WARN,
       * "import/no-named-as-default-member": WARN,
       * "import/order": [
       *   "error",
       *   {
       *     groups: [
       *       "builtin", // 1. Imports from "vue" and other built-in modules
       *       "external", // 2. Imports from external libraries like "aloha-vue"
       *     ],
       *     pathGroups: [
       *       {
       *         pattern: "vue", // Group for "vue" imports
       *         group: "builtin",
       *         position: "before",
       *       },
       *       {
       *         pattern: "aloha-vue", // Group for "aloha-vue" imports
       *         group: "builtin",
       *         position: "before", // Ensure it's in the same group as "vue"
       *       },
       *     ],
       *     pathGroupsExcludedImportTypes: [
       *       "builtin",
       *       // "builtin", "unknown"
       *     ], // Exclude "builtin" from path group checks
       *     alphabetize: {
       *       order: "asc", // Alphabetize imports within each group
       *       caseInsensitive: true, // Ignore case sensitivity while sorting
       *     },
       *     "newlines-between": "always-and-inside-groups", // Enforce a blank line after "aloha-vue" but not between related imports
       *   },
       * ],
       */

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
      // "sort-imports": [WARN, {
      //   ignoreMemberSort: false,
      //   memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      //   ignoreCase: true,
      //   ignoreDeclarationSort: true,
      // }],
      "sort-keys": OFF,
      strict: OFF,
      yoda: [WARN, "never", { exceptRange: true }],

      /*
       * Vue.js
       * - Base Rules
       */
      "vue/comment-directive": WARN,
      // - Priority A: Essential
      "vue/multi-word-component-names": WARN,
      "vue/no-arrow-functions-in-watch": WARN,
      "vue/no-async-in-computed-properties": WARN,
      "vue/no-child-content": WARN,
      "vue/no-computed-properties-in-data": WARN,
      "vue/no-dupe-keys": WARN,
      "vue/no-dupe-v-else-if": WARN,
      "vue/no-duplicate-attributes": WARN,
      "vue/no-export-in-script-setup": WARN,
      "vue/no-mutating-props": WARN,
      "vue/no-parsing-error": WARN,
      "vue/no-ref-as-operand": WARN,
      "vue/no-reserved-component-names": WARN,
      "vue/no-reserved-keys": WARN,
      "vue/no-reserved-props": WARN,
      "vue/no-shared-component-data": WARN,
      "vue/no-side-effects-in-computed-properties": WARN,
      "vue/no-template-key": WARN,
      "vue/no-textarea-mustache": WARN,
      "vue/no-unused-components": WARN,
      "vue/no-unused-vars": WARN,
      "vue/no-use-computed-property-like-method": WARN,
      "vue/no-use-v-if-with-v-for": WARN,
      "vue/no-useless-template-attributes": WARN,
      "vue/no-v-text-v-html-on-component": WARN,
      "vue/require-component-is": WARN,
      "vue/require-prop-type-constructor": WARN,
      "vue/require-render-return": WARN,
      "vue/require-v-for-key": WARN,
      "vue/require-valid-default-prop": WARN,
      "vue/return-in-computed-property": WARN,
      "vue/return-in-emits-validator": WARN,
      "vue/use-v-on-exact": WARN,
      "vue/valid-attribute-name": WARN,
      "vue/valid-define-emits": WARN,
      "vue/valid-define-props": WARN,
      "vue/valid-next-tick": WARN,
      "vue/valid-template-root": WARN,
      "vue/valid-v-bind": WARN,
      "vue/valid-v-cloak": WARN,
      "vue/valid-v-else-if": WARN,
      "vue/valid-v-else": WARN,
      "vue/valid-v-for": WARN,
      "vue/valid-v-html": WARN,
      "vue/valid-v-if": WARN,
      "vue/valid-v-model": WARN,
      "vue/valid-v-on": WARN,
      "vue/valid-v-once": WARN,
      "vue/valid-v-pre": WARN,
      "vue/valid-v-show": WARN,
      "vue/valid-v-slot": WARN,
      "vue/valid-v-text": WARN,
      // - Priority A: Essential for Vue.js 3.x
      "vue/no-deprecated-data-object-declaration": WARN,
      "vue/no-deprecated-destroyed-lifecycle": WARN,
      "vue/no-deprecated-dollar-listeners-api": WARN,
      "vue/no-deprecated-dollar-scopedslots-api": WARN,
      "vue/no-deprecated-events-api": WARN,
      "vue/no-deprecated-filter": WARN,
      "vue/no-deprecated-functional-template": WARN,
      "vue/no-deprecated-html-element-is": WARN,
      "vue/no-deprecated-inline-template": WARN,
      "vue/no-deprecated-props-default-this": WARN,
      "vue/no-deprecated-router-link-tag-prop": WARN,
      "vue/no-deprecated-scope-attribute": WARN,
      "vue/no-deprecated-slot-attribute": WARN,
      "vue/no-deprecated-slot-scope-attribute": WARN,
      "vue/no-deprecated-v-bind-sync": WARN,
      "vue/no-deprecated-v-is": WARN,
      "vue/no-deprecated-v-on-native-modifier": WARN,
      "vue/no-deprecated-v-on-number-modifiers": WARN,
      "vue/no-deprecated-vue-config-keycodes": WARN,
      "vue/no-expose-after-await": WARN,
      "vue/no-lifecycle-after-await": WARN,
      "vue/no-v-for-template-key-on-child": WARN,
      "vue/no-watch-after-await": WARN,
      "vue/prefer-import-from-vue": WARN,
      "vue/require-slots-as-functions": WARN,
      "vue/require-toggle-inside-transition": WARN,
      "vue/valid-v-is": WARN,
      "vue/valid-v-memo": WARN,
      // - Priority B: Strongly Recommended
      "vue/attribute-hyphenation": WARN,
      "vue/component-definition-name-casing": WARN,
      "vue/first-attribute-linebreak": WARN,
      "vue/html-closing-bracket-newline": WARN,
      "vue/html-closing-bracket-spacing": WARN,
      "vue/html-end-tags": WARN,
      "vue/html-indent": WARN,
      "vue/html-quotes": WARN,
      "vue/html-self-closing": WARN,
      "vue/max-attributes-per-line": WARN,
      "vue/multiline-html-element-content-newline": WARN,
      "vue/mustache-interpolation-spacing": [WARN, "always"],
      "vue/no-multi-spaces": WARN,
      "vue/no-spaces-around-equal-signs-in-attribute": WARN,
      "vue/no-template-shadow": WARN,
      "vue/one-component-per-file": WARN,
      "vue/prop-name-casing": WARN,
      "vue/require-default-prop": WARN,
      "vue/require-prop-types": WARN,
      "vue/singleline-html-element-content-newline": WARN,
      "vue/v-bind-style": WARN,
      "vue/v-on-style": WARN,
      "vue/v-slot-style": WARN,
      // - Priority B: Strongly Recommended for Vue.js 3.x
      "vue/require-explicit-emits": WARN,
      "vue/v-on-event-hyphenation": WARN,
      // - Priority C: Recommended
      "vue/attributes-order": WARN,
      "vue/no-lone-template": WARN,
      "vue/no-multiple-slot-args": WARN,
      "vue/no-v-html": WARN,
      "vue/order-in-components": WARN,
      "vue/this-in-template": WARN,
      // - Uncategorized
      "vue/block-order": [WARN, {
        order: ["template", "script", "style"],
      }],
      "vue/block-tag-newline": WARN,
      "vue/component-api-style": OFF,

      /*
       * "vue/component-name-in-template-casing": [WARN, {
       *   "kebab-case": {
       *     registeredComponentsOnly: true,
       *   },
       * }],
       */
      "vue/match-component-file-name": WARN,
      "vue/match-component-import-name": WARN,
      "vue/next-tick-style": WARN,
      "vue/no-deprecated-delete-set": WARN,
      "vue/no-duplicate-attr-inheritance": WARN,
      "vue/no-empty-component-block": WARN,
      "vue/no-multiple-objects-in-class": WARN,
      "vue/no-potential-component-option-typo": WARN,
      "vue/no-ref-object-reactivity-loss": OFF,
      "vue/no-required-prop-with-default": WARN,
      "vue/no-root-v-if": WARN,
      "vue/no-setup-props-reactivity-loss": WARN,
      "vue/no-template-target-blank": OFF,
      "vue/no-this-in-before-route-enter": WARN,
      "vue/no-unused-refs": WARN,
      "vue/no-use-v-else-with-v-for": WARN,
      "vue/no-useless-mustaches": WARN,
      "vue/no-useless-v-bind": WARN,
      "vue/prefer-true-attribute-shorthand": WARN,
      "vue/prefer-use-template-ref": WARN,
      "vue/require-name-property": WARN,
      "vue/sort-keys": OFF,

      /*
       * "vue/sort-keys": [WARN, "asc", {
       *   "caseSensitive": false,
       *   "ignoreChildrenOf": ["model"],
       *   "ignoreGrandchildrenOf": ["computed", "directives", "inject", "props", "watch"],
       *   "minKeys": 2,
       *   "natural": false
       * }],
       */
    },
  },
  // Jest
  {
    // update this to match your test files
    files: ["**/*.spec.js", "**/*.test.js"],
    ...pluginJest.configs["flat/recommended"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];
