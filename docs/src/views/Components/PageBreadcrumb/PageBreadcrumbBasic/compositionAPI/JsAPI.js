export default function JsAPI() {
  const codeJs = `import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  name: "PageBreadcrumbBasic",
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "Home", href: import.meta.env.BASE_URL },
      { label: "Components" },
      { label: "Breadcrumb" },
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
