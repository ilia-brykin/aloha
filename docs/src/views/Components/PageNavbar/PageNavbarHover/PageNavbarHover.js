import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ANavbar,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNavbarHover",
  components: {
    AlohaExample,
    ANavbar,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const data = [
      { id: "home", label: "Home", href: "#navbar_home" },
      {
        id: "products",
        label: "Products",
        children: [
          { id: "laptops", label: "Laptops", href: "#navbar_laptops" },
          {
            id: "accessories",
            label: "Accessories",
            children: [
              { id: "bags", label: "Bags", href: "#navbar_bags" },
              {
                id: "cables",
                label: "Cables",
                children: [
                  { id: "usb", label: "USB", href: "#navbar_usb" },
                  { id: "hdmi", label: "HDMI", href: "#navbar_hdmi" },
                ],
              },
            ],
          },
          { id: "phones", label: "Phones", href: "#navbar_phones", disabled: true },
        ],
      },
      {
        id: "docs",
        label: "Docs",
        href: "#navbar_docs",
        children: [
          { id: "start", label: "Quick start", href: "#navbar_start" },
          { id: "api", label: "API", href: "#navbar_api" },
        ],
      },
      { id: "contact", label: "Contact", href: "#navbar_contact" },
    ];

    return {
      codeHtml,
      codeJs,
      data,
    };
  },
};
