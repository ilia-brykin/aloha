import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ANavbar,
  ARadio,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNavbarOverflow",
  components: {
    AlohaExample,
    ANavbar,
    ARadio,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const overflow = ref("more");
    const dataOverflow = [
      { label: "more", value: "more" },
      { label: "wrap", value: "wrap" },
      { label: "scroll", value: "scroll" },
    ];
    const data = [
      { id: "home", label: "Home", href: "#navbar_home" },
      { id: "news", label: "News", href: "#navbar_news" },
      { id: "products",
        label: "Products",
        children: [
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
      codeHtml,
      codeJs,
      data,
      dataOverflow,
      overflow,
    };
  },
};
