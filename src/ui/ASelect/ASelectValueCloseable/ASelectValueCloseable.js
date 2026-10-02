import {
  h,
} from "vue";
import {
  AElement,
  ATranslation,
} from "../../../index";

import CloseAPI from "./compositionAPI/CloseAPI";
import GroupAPI from "./compositionAPI/GroupAPI";
import LabelAPI from "./compositionAPI/LabelAPI";

const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


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
    keyGroup: {
      type: [String, Number, Array],
      required: false,
      default: undefined,
    },
    keyGroupLabelCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    labelNotFound: {
      type: String,
      required: false,
      default: undefined,
    },
    mode: {
      type: String,
      default: "default",
      validator: value => ["default", "one_per_group"].includes(value),
    },
    showNotFound: {
      type: Boolean,
      required: false,
      default: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    translateGroup: {
      type: Boolean,
      required: false,
      default: false,
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

    const {
      groupLabel,
    } = GroupAPI(props);

    return {
      closeModel,
      currentLabel,
      groupLabel,
    };
  },
  render() {
    return h("li", {
      class: [
        "a_select__ul_closeable__item",
        {
          a_select__ul_closeable__item_invalid: this.data.__invalidEntry__,
        },
      ],
    }, [
      this.slotName && this.$slots[this.slotName] ?
        this.$slots[this.slotName]({
          item: this.data,
          label: this.currentLabel,
          inDropdown: false,
        }) :
        h("span", [
          this.groupLabel ?
            h(ATranslation, {
              alwaysTranslate: this.alwaysTranslate,
              tag: "span",
              html: this.groupLabel,
              extra: this.data.extra,
              textAfter: ":&nbsp;",
            }) :
            "",
          h(ATranslation, {
            alwaysTranslate: this.alwaysTranslate,
            tag: "span",
            html: this.currentLabel,
            extra: this.data.extra,
          }),
        ]),

      !this.hideDeleteButton && !this.disabled ?
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
