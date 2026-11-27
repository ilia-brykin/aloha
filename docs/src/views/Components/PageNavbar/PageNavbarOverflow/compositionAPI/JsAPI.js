export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ANavbar,
  ARadio,
} from "aloha-vue";

export default {
  name: "PageNavbarOverflow",
  components: {
    ANavbar,
    ARadio,
  },
  setup() {
    const overflow = ref("more");
    const dataOverflow = [
      { label: "more", value: "more" },
      { label: "wrap", value: "wrap" },
      { label: "scroll", value: "scroll" },
    ];
    const data = [
      { id: "home", label: "Home", href: "#navbar_home" },
      { id: "news", label: "News", href: "#navbar_news" },
      { id: "products", label: "Products", children: [
        { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
        { id: "phones", label: "Phones", href: "#navbar_phones" },
      ] },
      { id: "services", label: "Services", href: "#navbar_services" },
      { id: "support", label: "Support", href: "#navbar_support" },
      { id: "blog", label: "Blog", href: "#navbar_blog" },
      { id: "careers", label: "Careers", href: "#navbar_careers" },
      { id: "contact", label: "Contact", href: "#navbar_contact" },
    ];

    return {
      data,
      dataOverflow,
      overflow,
    };
  },
};`;

  return {
    codeJs,
  };
}
