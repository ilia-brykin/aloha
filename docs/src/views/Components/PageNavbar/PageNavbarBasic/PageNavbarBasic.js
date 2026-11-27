import {
  computed,
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANavbar,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

const DATA = [
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

export default {
  name: "PageNavbarBasic",
  components: {
    AlohaExample,
    AButton,
    ANavbar,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const activeId = ref("home");
    const lastLabel = ref("");

    // isActive: aria-current="page" and the way to it
    const setActive = items => items.map(item => ({
      ...item,
      isActive: item.id === activeId.value,
      children: item.children && setActive(item.children),
    }));

    const data = computed(() => setActive(DATA));

    const onNavigate = ({ item }) => {
      activeId.value = item.id;
      lastLabel.value = item.label;
    };

    return {
      codeHtml,
      codeJs,
      data,
      lastLabel,
      onNavigate,
    };
  },
};
