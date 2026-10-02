import {
  h,
} from "vue";

import AButton from "../AButton/AButton";
import ALink from "../ALink/ALink";

import CopyAPI from "./compositionAPI/CopyAPI";

const Copy = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>`;


export default {
  name: "ALinkCopy",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    buttonOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    buttonPosition: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
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
    const BUTTON = h(AButton, {
      alwaysTranslate: this.alwaysTranslate,
      class: "a_btn a_btn_secondary",
      disabled: this.disabled,
      iconLeft: Copy,
      textScreenReader: "_A_LINK_COPY_BTN_TITLE_",
      title: "_A_LINK_COPY_BTN_TITLE_",
      onClick: this.copyText,
      ...this.buttonOptions,
    }, this.$slots?.button);

    return h("div", {
      class: [
        this.classDefault,
        this.class,
      ],
      role: "group",
    }, [
      this.buttonPosition === "left" && BUTTON,
      h(ALink, {
        ref: "linkRef",
        alwaysTranslate: this.alwaysTranslate,
        disabled: this.disabled,
        ...this.linkOptions,
      }, this.$slots?.link),
      this.buttonPosition === "right" && BUTTON,
    ]);
  },
};
