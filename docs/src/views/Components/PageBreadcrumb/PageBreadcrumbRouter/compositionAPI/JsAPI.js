export default function JsAPI() {
  const codeJs = `import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  name: "PageBreadcrumbRouter",
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { id: "home", label: "Home", to: { name: "PageStart" } },
      { id: "start", label: "Getting started", to: { name: "PageQuickStart" } },
      { id: "breadcrumb", label: "Breadcrumb" },
    ];

    return {
      items,
    };
  },
};`;

  return {
    codeJs,
  };
}
