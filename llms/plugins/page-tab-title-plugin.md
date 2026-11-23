# Plugin APageTabTitlePlugin

## Introduction

**APageTabTitlePlugin** is used to set a base title **baseTitle** for the **<title>** tag in your project. The base part of the title (e.g., the application name) is set once via the plugin and will automatically be appended at the end of each page title. The unique part of the title, specific to each page, is set using the **APageTabTitle** component via the **title** prop.

## Connection

To connect the plugin, add it to your project:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import {
  APageTabTitlePlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(APageTabTitlePlugin, "Documentation aloha-vue");

app.mount("#app");
```

### Notes

- The base title **baseTitle** is set during plugin initialization and remains unchanged for the entire application.
- The unique title for each page is added using the **APageTabTitle** component.

## Example of using the **APageTabTitle** component

The **APageTabTitle** component allows you to set the unique part of the title for each page.

```html
<template>
  <div>
    <a-page-tab-title title="Home Page"></a-page-tab-title>
    <h1>Welcome!</h1>
    <p>This is a demo page.</p>
  </div>
</template>

<script>
import { 
  APageTabTitle,
} from "aloha-vue";

export default {
  name: "HomePage",
  components: {
    APageTabTitle,
  },
};
</script>
```

In this example, the full page title will be: **"Home Page - Documentation aloha-vue"**.
