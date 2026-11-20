# AIconPlugin Plugin

## Introduction

**AIconPlugin** allows you to connect a set of icons that can be used in **Aloha-Vue** components, such as **AButton** and **AIcon**. We recommend using icons from the [aloha-svg](https://www.npmjs.com/package/aloha-svg) library, which combines up-to-date **SVG** icons from various sources, such as **Bootstrap**, **Flag Icons**, and **Tabler Icons**. Icons are imported as **JavaScript** files.

## Connection

Start by connecting the plugin and icons in your project:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import "aloha-vue/dist/aloha-vue.css";
import {
  AIconPlugin,
} from "aloha-vue";
import ArrowsCollapse from "aloha-svg/dist/js/bootstrap/ArrowsCollapse";
import Bell from "aloha-svg/dist/js/bootstrap/Bell";

const app = createApp(App);

app.use(AIconPlugin, {
  icons: {
    ArrowsCollapse,
    Bell,
  },
});

app.mount("#app");
```

### Notes

- You can import icons from any library, but we recommend [aloha-svg](https://www.npmjs.com/package/aloha-svg) for convenience and up-to-date icons.
- All registered icons will be available in components that support them through the appropriate prop.

## Usage Examples

### Using in **AButton**

The **AButton** component supports icons through the **icon-left** and **icon-right** props.

```html
<template>
  <div>
    <AButton icon-left="ArrowsCollapse">
      Collapse
    </AButton>
    <AButton icon-right="Bell">
      Notifications
    </AButton>
  </div>
</template>

<script>
import { 
  AButton,
} from "aloha-vue";

export default {
  name: "ButtonExample",
  components: {
    AButton,
  },
};
</script>
```

### Using in **AIcon**

The **AIcon** component allows you to directly use registered icons.

```html
<template>
  <div>
    <a-icon icon="ArrowsCollapse" class="icon-large"></a-icon>
    <a-icon icon="Bell" class="icon-small"></a-icon>
  </div>
</template>

<script>
import { 
  AIcon,
} from "aloha-vue";

export default {
  name: "IconExample",
  components: {
    AIcon,
  },
};
</script>
```
