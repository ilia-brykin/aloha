import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AMenu,
  AMenuButtonToggle,
  ASwitch,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  forEach,
} from "lodash-es";

export default {
  name: "PageMenuSearchInDom",
  components: {
    AlohaExample,
    AMenu,
    AMenuButtonToggle,
    ASwitch,
  },
  setup() {
    const isTranslated = ref(false);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const menuItems = [
      {
        id: "forms",
        label: "Forms",
        children: [
          { id: "input", label: "Input", to: { name: "PageInput" } },
          { id: "select", label: "Select", to: { name: "PageSelect" } },
          { id: "checkbox", label: "Checkbox", to: { name: "PageCheckbox" }, disabled: true },
        ],
      },
      { id: "button", label: "Button", to: { name: "PageButton" } },
      { id: "alert", label: "Alert", to: { name: "PageAlert" } },
    ];

    const translateMenu = value => {
      forEach({
        forms: ["Forms", "Formulare"],
        input: ["Input", "Eingabe"],
        select: ["Select", "Auswahl"],
        checkbox: ["Checkbox", "Kontrollkästchen"],
        button: ["Button", "Schaltfläche"],
        alert: ["Alert", "Hinweis"],
      }, (labels, id) => {
        const LINK = document.getElementById(`docs_menu_dom_${ id }_link`);
        LINK.querySelector(".a_menu__link__text").textContent = labels[value ? 1 : 0];
      });
    };

    return {
      codeHtml,
      codeJs,
      isTranslated,
      menuItems,
      translateMenu,
    };
  },
};
