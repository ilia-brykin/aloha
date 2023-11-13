import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";

import ToggleAPI from "./compositionAPI/ToggleAPI";

export default {
  name: "AMenuButtonToggle",
  props: {
    buttonToggleProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    class: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    menuId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      btnToggleTitle,
      isMenuOpen,
      toggleMenu,
    } = ToggleAPI(props);

    return {
      btnToggleTitle,
      isMenuOpen,
      toggleMenu,
    };
  },
  render() {
    return h(AButton, {
      class: ["a_menu_2__btn_toggle", this.class, {
        a_menu_2__btn_toggle_open: this.isMenuOpen,
      }],
      type: "button",
      title: this.btnToggleTitle,
      textAreaHidden: this.btnToggleTitle,
      onClick: this.toggleMenu,
      ...this.buttonToggleProps,
    }, () => [
      h("span", {
        areaHidden: true,
        class: "a_menu_2__btn_toggle__bar a_menu_2__btn_toggle__bar_1 aloha_btn__ml_0",
      }),
      h("span", {
        areaHidden: true,
        class: "a_menu_2__btn_toggle__bar a_menu_2__btn_toggle__bar_2 aloha_btn__ml_0",
      }),
      h("span", {
        areaHidden: true,
        class: "a_menu_2__btn_toggle__bar a_menu_2__btn_toggle__bar_3 aloha_btn__ml_0",
      }),
    ]);
  },
};
