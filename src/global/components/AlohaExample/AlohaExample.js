import AButton from "../../../../../src/AButton/AButton";
import AlohaHighlightjs from "../AlohaHighlightjs/AlohaHighlightjs";
import ATranslation from "../../../../../src/ATranslation/ATranslation";

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
    codeHtml: {
      type: String,
      required: true,
    },
    codeJs: {
      type: String,
      required: true,
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
  },
  setup(props) {
    const {
      btnToggleCodeTitle,
      isCodeVisible,
      toggleCode,
    } = CodeToggleAPI();

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
