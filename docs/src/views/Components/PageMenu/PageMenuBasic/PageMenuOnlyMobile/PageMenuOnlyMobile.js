import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageMenuOnlyMobile",
  components: {
    AlohaExample,
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const menuItems = [
      { id: "input", label: "Input", icon: "FileEarmarkText", to: { name: "PageInput" } },
      { id: "select", label: "Select", icon: "ListUl", to: { name: "PageSelect" } },
      { id: "checkbox", label: "Checkbox", icon: "CheckLg", to: { name: "PageCheckbox" } },
      { id: "radio", label: "Radio", icon: "CheckLg", to: { name: "PageRadio" } },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "modal", label: "Modal", icon: "Window", to: { name: "PageModal" } },
    ];

    return {
      codeHtml,
      codeJs,
      menuItems,
    };
  },
};
