import AlohaHighlightjs from "../AlohaHighlightjs/AlohaHighlightjs";
import {
  AButton,
  ATranslation,
} from "aloha-vue";

import ClipboardAPI from "./compositionAPI/ClipboardAPI";
import CodeToggleAPI from "./compositionAPI/CodeToggleAPI";
import ParametersAPI from "./compositionAPI/ParametersAPI";

export default {
  name: "AlohaExample",
  components: {
    AButton,
    AlohaHighlightjs,
    ATranslation,
  },
  props: {
    code: {
      type: String,
      required: false,
      default: undefined,
    },
    codeHtml: {
      type: String,
      required: false,
      default: undefined,
    },
    codeJs: {
      type: String,
      required: false,
      default: undefined,
    },
    description: {
      type: String,
      required: false,
      default: undefined,
    },
    emits: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    exposes: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    header: {
      type: String,
      required: false,
      default: undefined,
    },
    isCodeVisibleDefault: {
      type: Boolean,
      required: false,
      default: false,
    },
    props: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    slots: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    useActions: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const {
      btnToggleCodeTitle,
      initIsCodeVisible,
      isCodeVisible,
      toggleCode,
    } = CodeToggleAPI(props);

    const {
      copyHtmlToClipboard,
      copyJsToClipboard,
    } = ClipboardAPI(props);

    const {
      emitsLocal,
      exposesLocal,
      hasAtLeastOneProperty,
      hasEmits,
      hasExposes,
      hasProps,
      hasSlots,
      propsLocal,
      slotsLocal,
    } = ParametersAPI(props);

    initIsCodeVisible();

    return {
      btnToggleCodeTitle,
      copyHtmlToClipboard,
      copyJsToClipboard,
      emitsLocal,
      exposesLocal,
      hasAtLeastOneProperty,
      hasEmits,
      hasExposes,
      hasProps,
      hasSlots,
      isCodeVisible,
      propsLocal,
      slotsLocal,
      toggleCode,
    };
  },
};
