# Quick Start

## Installation

**Aloha-Vue** can be installed using **npm**, **yarn**, or **pnpm**:

```bash
# Using npm
$ npm install aloha-vue

# Using yarn
$ yarn add aloha-vue

# Using pnpm
$ pnpm add aloha-vue
```

## Styles

**Aloha-Vue** provides styles in two formats:

- Precompiled **CSS**: `dist/aloha-vue.css`
- Source **SCSS**: `scss/aloha-vue.scss`

### Example: Adding styles in `main.js`

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import "aloha-vue/dist/aloha-vue.css";

const app = createApp(App);
app.mount("#app");
```

## Usage

### Example: Importing and using a simple component **AButton**

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { AButton } from "aloha-vue";
import "aloha-vue/dist/aloha-vue.css";

const app = createApp(App);

app.component("AButton", AButton);

app.mount("#app");
```

In your **Vue** template:

```html
<template>
  <div>
    <a-button @click="onClick">Click me</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert("The button is pressed!");
    },
  },
};
</script>
```
