# AComponentsPlugin Plugin

## Introduction

`AComponentsPlugin` holds the settings of all components in one place. The key is the name of the component (for example `AModal`), the value is an object with the default values of the props (`props`) and the other settings of the component. A prop that is passed to the component always wins.

## Connection

Install the plugin before `app.mount()`:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  AComponentsPlugin,
} from "aloha-vue";
import CheckLg from "aloha-svg/dist/js/bootstrap/CheckLg";

const app = createApp(App);

app.use(AComponentsPlugin, {
  // AModalForm and AModalWizard take these props too
  AModal: {
    props: {
      closeButtonClass: "a_btn a_btn_link",
      useEscape: false,
    },
  },
  AModalWizard: {
    props: {
      useEscape: true,
    },
  },
  AAlert: {
    props: {
      closable: true,
    },
    icons: {
      info: CheckLg,
    },
  },
  ASelect: {
    props: {
      keyId: "id",
      keyLabel: "name",
    },
  },
  ASelectStyle: {
    cssClasses: [
      { label: "My style", value: "my_style", group: "my", groupName: "My styles" },
    ],
  },
  ATable: {
    props: {
      isStriped: true,
    },
    config: {
      isHtmlTitleSort: true,
    },
  },
  ARouterLinkConfig: {
    routes: router.getRoutes(),
    excludedPathRoutes: ["/:catchAll(.*)"],
  },
});

app.mount("#app");
```

### Notes

- Several calls of `app.use` are merged per component: objects (`props`, `icons`, `config`) are merged, other values are replaced.
- `undefined` can be set as a default too.
- Objects and arrays are shared by all instances: do not change them in the component.
- The defaults are read when a component is created.

## Settings

 Key  Components  Description

 `props`  all  Default values of the props.

 `icons`  `AAlert` (`success`, `danger`, `info`, `warning`), `ACarousel` (`dots`, `squares`)  Icons for the types. Missing types keep the standard icon.

 `config`  `ATable` (`isHtmlTitleSort`)  Other settings of the table.

 `cssClasses`  `ASelectStyle`  Classes added to the standard classes.

 `routes`, `excludedPathRoutes`  `ARouterLinkConfig`  Routes of the router for the select of the route (only routes with a name, without the excluded paths).

 `scrollbarCompensation`  `AModal`, `ADrawer`, `APopover` (bottom sheet)  Space of the scrollbar while a modal is open (the page does not move). `"auto"` (default): measured, 0 without a scrollbar (macOS, iOS, Android, overlay scrollbars); a number (px) or a CSS length: fixed; `false`: none.

 `extends`  all  Parent for the prop defaults (see below).

## Inheritance

- The prop defaults of these components fall back to the parent: `AModalForm`, `AModalWizard` → `AModal`; `ASelectIcon`, `ASelectStyle` → `ASelect`. A value of the component itself wins.
- `extends` sets the parent of an own component, `extends: null` switches the inheritance off.
- Only `props` are inherited.

## Own components

Own components read their settings with `getPropDefault(componentName, propName, defaultValue)` and `getComponentOption(componentName, key, defaultValue)`:

```javascript
import {
  getComponentOption,
  getPropDefault,
} from "aloha-vue";

export default {
  name: "MyDialog",
  props: {
    size: {
      type: String,
      required: false,
      default: () => getPropDefault("MyDialog", "size", "medium"),
    },
  },
  computed: {
    icons() {
      return getComponentOption("MyDialog", "icons", {});
    },
  },
};

// app.use(AComponentsPlugin, {
//   MyDialog: {
//     extends: "AModal", // the props of AModal are the defaults of MyDialog
//     props: { size: "large" },
//     icons: { close: "<svg>…</svg>" },
//   },
// });
```
