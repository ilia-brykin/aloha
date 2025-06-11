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
      default: true,
    },
    class: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    insideMenu: {
      type: Boolean,
      required: false,
    },
    menuId: {
      type: String,
      required: true,
    },
    selectorClose: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    selectorCloseIds: {
      type: [String, Array],
      required: false,
      default: undefined,
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
      id: `${ this.menuId }__btn_toggle`,
      class: ["a_menu__btn_toggle", this.class, {
        a_menu__btn_toggle_open: this.isMenuOpen,
        a_menu__btn_toggle_close: !this.isMenuOpen,
        a_menu__btn_toggle_inside_menu: this.insideMenu,
        a_menu__btn_toggle_outside_menu: !this.insideMenu,
      }],
      type: "button",
      title: this.btnToggleTitle,
      textScreenReader: this.btnToggleTitle,
      onClick: this.toggleMenuObButton,
      ...this.buttonToggleProps,
    }, () => [
      h("span", {
        ariaHidden: true,
        class: "a_menu__btn_toggle__bar a_menu__btn_toggle__bar_1 aloha_element__ml_0",
      }),
      h("span", {
        ariaHidden: true,
        class: "a_menu__btn_toggle__bar a_menu__btn_toggle__bar_2 aloha_element__ml_0",
      }),
      h("span", {
        ariaHidden: true,
        class: "a_menu__btn_toggle__bar a_menu__btn_toggle__bar_3 aloha_element__ml_0",
      }),
    ]);
  },
};
