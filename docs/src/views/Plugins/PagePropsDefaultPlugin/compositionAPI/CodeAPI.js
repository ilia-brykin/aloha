export default function CodeAPI() {
  const connectionCode = `import { createApp } from "vue";
import App from "./App.vue";
import {
  APropsDefaultPlugin,
} from "aloha-vue";

const app = createApp(App);

app.use(APropsDefaultPlugin, {
  AModal: {
    closeButtonClass: "a_btn a_btn_link",
    useEscape: false,
  },
  ASelect: {
    keyId: "id",
    keyLabel: "name",
  },
  ASpinner: {
    tag: "div",
  },
  ATable: {
    isStriped: true,
  },
});

app.mount("#app");`;

  const ownComponentCode = `import {
  getPropDefault,
} from "aloha-vue";

export default {
  name: "MyComponent",
  props: {
    size: {
      type: String,
      required: false,
      default: () => getPropDefault("MyComponent", "size", "medium"),
    },
  },
};

// app.use(APropsDefaultPlugin, { MyComponent: { size: "large" } });`;

  return {
    connectionCode,
    ownComponentCode,
  };
}
