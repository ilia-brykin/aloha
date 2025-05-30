import {
  h,
} from "vue";
import {
  AElement,
  ATranslation,
} from "../../../index";

import CloseAPI from "./compositionAPI/CloseAPI";
import LabelAPI from "./compositionAPI/LabelAPI";

import XLg from "aloha-svg/dist/js/bootstrap/XLg";


export default {
  name: "ASelectValueCloseable",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    hideDeleteButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "changeModelValue",
  ],
  setup(props, context) {
    const {
      currentLabel,
    } = LabelAPI(props);

    const {
      closeModel,
    } = CloseAPI(props, context);

    return {
      closeModel,
      currentLabel,
    };
  },
  render() {
    return h("li", {
      class: "a_select__ul_closeable__item",
    }, [
      this.slotName && this.$slots[this.slotName] ?
        this.$slots[this.slotName]({
          item: this.data,
          label: this.currentLabel,
          inDropdown: false,
        }) :
        h(ATranslation, {
          alwaysTranslate: this.alwaysTranslate,
          tag: "span",
          html: this.currentLabel,
          extra: this.data.extra,
        }),
      !this.hideDeleteButton ?
        h(AElement, {
          class: "a_btn a_btn_link a_select__ul_closeable__item__btn",
          disabled: this.disabled,
          iconLeft: XLg,
          prevent: true,
          stop: true,
          tabindex: -1,
          type: "button",
          onClick: this.closeModel,
        }) :
        "",
    ]);
  },
};
