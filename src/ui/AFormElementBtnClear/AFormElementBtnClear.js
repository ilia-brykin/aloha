import {
  h,
} from "vue";
import {
  AElement,
} from "../../index";

import ClearAPI from "./compositionAPI/ClearAPI";

const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


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
      default: "_A_FORM_ELEMENT_REMOVE_FIELD_CONTENT_",
    },
    textScreenReader: {
      type: String,
      required: false,
      default: "_A_FORM_ELEMENT_REMOVE_FIELD_CONTENT_",
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
