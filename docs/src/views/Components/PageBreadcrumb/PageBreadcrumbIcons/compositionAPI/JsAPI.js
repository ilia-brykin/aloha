export default function JsAPI() {
  const codeJs = `import {
  ABreadcrumb,
} from "aloha-vue";

// i18n: "_A_BREADCRUMB_EXAMPLE_ORDER_": "Order {{ number }}"

export default {
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "_A_BREADCRUMB_EXAMPLE_HOME_", href: "/", icon: "House" },
      { label: "_A_BREADCRUMB_EXAMPLE_ORDERS_", href: "/orders" },
      // the placeholder {{ number }} comes from the prop extra (or from item.extra)
      { label: "_A_BREADCRUMB_EXAMPLE_ORDER_" },
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
