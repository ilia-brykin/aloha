![npm (scoped)](https://img.shields.io/npm/v/aloha-vue?label=NPM)
![NPM](https://img.shields.io/npm/l/aloha-vue?label=License)
![npm](https://img.shields.io/npm/dt/aloha-vue?label=Downloads)

# aloha-vue

![Aloha Framework logo](.images/aloha_logo.png)

---

Aloha is a Vue.js-based, highly customizable, internationalized framework for helping developers write code faster and more efficiently, with a special focus on accessibility.

## Installation

Aloha-vue can be installed using npm, yarn, or pnpm:

```bash
# Using npm
$ npm install aloha-vue

# Using yarn
$ yarn add aloha-vue

# Using pnpm
$ pnpm add aloha-vue
```

## Styles

The styles for aloha-vue are provided in two formats:

- Precompiled CSS: `dist/aloha-vue.css`
- SCSS source: `scss/aloha-vue.scss`

### Example: Adding styles in `main.js`

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import "aloha-vue/aloha-vue.css";

const app = createApp(App);
app.mount("#app");
```

## Usage

### Example: Importing and using a simple component (AButton)

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { AButton } from "aloha-vue";
import "aloha-vue/aloha-vue.css";

const app = createApp(App);

app.component("AButton", AButton);

app.mount("#app");
```

In your Vue template:

```html
<template>
  <div>
    <a-button @click="onClick">Click Me</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert("Button clicked!");
    },
  },
};
</script>
```

## Development

### Documentation

```bash
# Serve with hot reloading at localhost:9000
# Requires Node.js v22.12.0
$ cd docs
$ npm i
$ npm run dev
```

## Documentation

The documentation can be found in [DOCS](https://ilia-brykin.github.io/aloha/). Each component has a dedicated demo page outlining both basic and advanced usage, along with an overview table.

[Aloha documentation](https://ilia-brykin.github.io/aloha/) is available in English, German, Spanish, French, Arabic, Italian, Russian, Croatian, Ukrainian, Dutch, and Polish.

## AI assistants

The [Aloha Vue 3 documentation index](https://ilia-brykin.github.io/aloha/llms.txt) links to a versioned API reference and Vue example for each public UI component. In this repository you can open [the source index](docs/public/llms.txt).

Copy the [Aloha Vue skill](.agents/skills/aloha-vue/) to `.agents/skills/aloha-vue/` in your consuming project for Codex, or to `.claude/skills/aloha-vue/` for Claude Code.

Example prompt:

> Use the Aloha Vue skill to build a keyboard-accessible form with ASelect and ADatepicker. Check the installed version and use the matching examples.

Run `node docs/scripts/check-ai-docs.mjs` from the repository root to check component coverage and links.

## Tests

```bash
# Start all tests
$ npm run test

# Start one test
$ npm run test src/filters/__tests__/filterList.test.js
```

## Sponsor / Support

[PROUNIX](https://prounix.de/)

## License

aloha-vue is released under the [MIT](https://github.com/ilia-brykin/aloha/blob/master/LICENSE) license.
