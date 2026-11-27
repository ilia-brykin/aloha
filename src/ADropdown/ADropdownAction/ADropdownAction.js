import {
  h,
} from "vue";
import {
  AButton,
  ALink,
} from "../../index";

import AttributesAPI from "./compositionAPI/AttributesAPI";

export default {
  name: "ADropdownAction",
  props: {
    action: {
      type: Object,
      required: true,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    // WAI-ARIA menu: li role="none", the button or link is a menuitem, focus only with the arrows (tabindex -1)
    isMenu: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const {
      attributesAction,
    } = AttributesAPI(props);

    return {
      attributesAction,
    };
  },
  render() {
    const MENU_ITEM = this.isMenu ? { role: "menuitem", tabindex: "-1" } : {};
    const LI_ROLE = this.isMenu ? "none" : undefined;

    if (this.action.type === "button") {
      return h("li", {
        class: this.action.liClass,
        role: LI_ROLE,
      }, [
        h(AButton, {
          ...this.attributesAction,
          ...MENU_ITEM,
          alwaysTranslate: this.alwaysTranslate,
          isHidden: undefined,
          callback: undefined,
          classButton: undefined,
          classExtra: undefined,
          isConfirm: undefined,
          callbackLocal: undefined,
          onClick: this.action.callback,
        }),
      ]);
    }
    if (this.action.type === "divider") {
      return h("li", {
        "aria-hidden": this.isMenu ? undefined : "true",
        class: [
          "a_dropdown__divider",
          this.action.liClass,
        ],
        role: this.isMenu ? "separator" : undefined,
      });
    }
    if (this.action.type === "link") {
      return h("li", {
        class: this.action.liClass,
        role: LI_ROLE,
      }, [
        h(ALink, {
          ...this.attributesAction,
          ...MENU_ITEM,
          alwaysTranslate: this.alwaysTranslate,
          classButton: undefined,
          classExtra: undefined,
          isHidden: undefined,
          isConfirm: undefined,
          callbackLocal: undefined,
        }),
      ]);
    }
    if (this.action.type === "template" &&
      this.action.slotName &&
      this.$slots[this.action.slotName]) {
      return this.$slots[this.action.slotName]({
        action: this.action,
      });
    }
    return null;
  },
};
