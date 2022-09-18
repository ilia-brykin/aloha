import {
  computed,
  h,
} from "vue";

import AMenuToggleAPI from "./compositionAPI/AMenuToggleAPI";

export default {
  name: "AMenuButtonToggle",
  props: {
    class: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
  },
  setup() {
    const {
      isMenuOpen,
      toggleMenu,
    } = AMenuToggleAPI();

    const btnToggleTitle = computed(() => {
      return isMenuOpen.value ?
        "Menü schließen" :
        "Menü öffnen";
    });

    return {
      btnToggleTitle,
      isMenuOpen,
      toggleMenu,
    };
  },
  render() {
    return h("button", {
      class: ["a_menu__btn_toggle", this.class, {
        a_menu__btn_toggle_open: this.isMenuOpen,
      }],
      type: "button",
      onClick: this.toggleMenu,
    }, [
      h("span", {
        class: "a_menu__btn_toggle__bar",
      }),
      h("span", {
        class: "a_menu__btn_toggle__bar",
      }),
      h("span", {
        class: "a_menu__btn_toggle__bar",
      }),
      h("span", {
        class: "a_position_absolute_all",
        title: this.btnToggleTitle,
        ariaHidden: true,
      }),
      h("span", {
        class: "a_sr_only",
      }, this.btnToggleTitle),
    ]);
  },
};
