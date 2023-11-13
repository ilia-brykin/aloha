import {
  computed,
  h,
} from "vue";

import AMenuToggleAPI from "./compositionAPI/AMenuToggleAPI";
import ATranslation from "../ATranslation/ATranslation";

export default {
  name: "AMenuButtonToggle",
  props: {
    class: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    buttonToggleVisible: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["always", "mobile", "desktop"].indexOf(value) !== -1,
    },
  },
  setup() {
    const {
      isMenuOpen,
      toggleMenu,
    } = AMenuToggleAPI();

    const btnToggleTitle = computed(() => {
      return isMenuOpen.value ?
        "_CLOSE_MENU_" :
        "_OPEN_MENU_";
    });

    return {
      btnToggleTitle,
      isMenuOpen,
      toggleMenu,
    };
  },
  render() {
    return h("button", {
      class: ["a_menu_2__btn_toggle", this.class, {
        a_menu_2__btn_toggle_open: this.isMenuOpen,
        a_menu_2__btn_toggle_mobile_only: this.buttonToggleVisible === "mobile",
        a_menu_2__btn_toggle_desktop_only: this.buttonToggleVisible === "desktop",
        a_menu_2__btn_toggle_always: this.buttonToggleVisible === "always",
      }],
      type: "button",
      onClick: this.toggleMenu,
    }, [
      h("span", {
        class: "a_menu_2__btn_toggle__bar",
      }),
      h("span", {
        class: "a_menu_2__btn_toggle__bar",
      }),
      h("span", {
        class: "a_menu_2__btn_toggle__bar",
      }),
      h(ATranslation, {
        tag: "span",
        class: "a_position_absolute_all",
        title: this.btnToggleTitle,
        ariaHidden: true,
      }),
      h(ATranslation, {
        tag: "span",
        class: "a_sr_only",
        text: this.btnToggleTitle,
      }),
    ]);
  },
};
