import {
  h,
} from "vue";

import AButton from "../AButton/AButton";
import ALink from "../ALink/ALink";

import CopyAPI from "./compositionAPI/CopyAPI";

export default {
  name: "ALinkCopy",
  props: {
    buttonOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    class: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    classDefault: {
      type: String,
      required: false,
      default: "a_btn_group",
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    linkOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    textCopy: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup() {
    const {
      copyText,
      linkRef,
    } = CopyAPI();

    return {
      copyText,
      linkRef,
    };
  },
  render() {
    return h("div", {
      class: [
        this.classDefault,
        this.class,
      ],
      role: "group",
    }, [
      h(ALink, {
        ref: "linkRef",
        disabled: this.disabled,
        ...this.linkOptions,
      }, this.$slots?.link),
      h(AButton, {
        class: "a_btn a_btn_secondary",
        disabled: this.disabled,
        iconLeft: "Files",
        textScreenReader: "_A_LINK_COPY_BTN_TITLE_",
        title: "_A_LINK_COPY_BTN_TITLE_",
        onClick: this.copyText,
        ...this.buttonOptions,
      }, this.$slots?.button),
    ]);
  },
};
