export default function JsAPI() {
  const codeJs = `import {
  ABreadcrumb,
} from "aloha-vue";

export default {
  components: {
    ABreadcrumb,
  },
  setup() {
    const items = [
      { label: "Home", href: "/", icon: "House" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Computers", href: "/products/electronics/computers" },
      { label: "Laptops", href: "/products/electronics/computers/laptops" },
      { label: "Aloha Book 14" },
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
