export default function CodeAPI() {
  const connectionCode = `import { createApp } from "vue";
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

app.mount("#app");`;

  const ownComponentCode = `import {
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
// });`;

  return {
    connectionCode,
    ownComponentCode,
  };
}
