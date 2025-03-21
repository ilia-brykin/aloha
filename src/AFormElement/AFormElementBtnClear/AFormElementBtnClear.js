import {
  h,
} from "vue";
import {
  AElement,
} from "../../index";

import ClearAPI from "./compositionAPI/ClearAPI";

import XLg from "aloha-svg/dist/js/bootstrap/XLg";

export default {
  name: "AFormElementBtnClear",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    class: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_transparent_dark a_btn_small",
    },
    icon: {
      type: String,
      required: false,
      default: XLg,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: false,
      default: "_REMOVE_FIELD_CONTENT_",
    },
    textScreenReader: {
      type: String,
      required: false,
      default: "_REMOVE_FIELD_CONTENT_",
    },
    tabindex: {
      type: Number,
      required: false,
      default: -1,
    },
    iconClass: {
      type: String,
      required: false,
      default: "a_form_element__btn_close__icon",
    },
  },
  emits: [
    "clear",
  ],
  setup(props, context) {
    const {
      clearLocal,
    } = ClearAPI(context);

    return {
      clearLocal,
    };
  },
  render() {
    if (this.disabled) {
      return undefined;
    }

    return h(AElement, {
      class: [
        "a_form_control__actions__btn",
        this.class,
      ],
      disabled: this.disabled,
      iconClass: this.iconClass,
      iconLeft: this.icon,
      onClick: this.clearLocal,
      tabindex: this.tabindex,
      textScreenReader: this.textScreenReader,
      title: this.title,
      type: "button",
    });
  },
};
