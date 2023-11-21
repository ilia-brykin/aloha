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
    canChangeBodyClass: {
      type: Boolean,
      required: false,
      default: false,
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
      toggleMenuObButton,
    } = ToggleAPI(props);

    return {
      btnToggleTitle,
      isMenuOpen,
      toggleMenuObButton,
    };
  },
  render() {
    return h(AButton, {
      class: ["a_menu_2__btn_toggle", this.class, {
        a_menu_2__btn_toggle_open: this.isMenuOpen,
      }],
      type: "button",
      title: this.btnToggleTitle,
      textScreenReader: this.btnToggleTitle,
      onClick: this.toggleMenuObButton,
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
