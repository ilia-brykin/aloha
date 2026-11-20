# Plugin AMobilePlugin

## Introduction

**AMobilePlugin** provides the ability to set a breakpoint for mobile device widths. This allows components like **ATable** and **AButton** to respond to screen width changes. The plugin also provides a **compositionAPI** called **AMobileAPI**, from which you can import the **ref** **isMobileWidth** and use it in your components to adapt the interface.

## Connection

To connect the plugin, add it to your project:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import {
  AMobilePlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(AMobilePlugin, {
  breakpoint: 1023,
});

app.mount("#app");
```

### Notes

- The breakpoint value **breakpoint** is set in pixels and defines the maximum screen width for mobile devices.
- The plugin works in conjunction with **aloha-vue** components that support mobile adaptation.

## Example of using **AMobilePlugin**

```html
<template>
  <div>
    <p v-if="isMobileWidth">You are using a mobile device.</p>
    <p v-else>You are using a desktop device.</p>
  </div>
</template>

<script>
import {
  AMobileAPI,
} from "aloha-vue";

export default {
  setup() {
    const {
      isMobileWidth,
    } = AMobileAPI;
    
    return {
      isMobileWidth,
    };
  },
};
</script>
```
