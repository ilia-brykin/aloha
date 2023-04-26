import AButton from "../../../../../src/AButton/AButton";
import ATranslation from "../../../../../src/ATranslation/ATranslation";

import ClipboardAPI from "./compositionAPI/ClipboardAPI";
import CodeToggleAPI from "./compositionAPI/CodeToggleAPI";

export default {
  name: "AlohaExample",
  components: {
    AButton,
    ATranslation,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: undefined,
    },
    codeHtml: {
      type: String,
      required: true,
    },
    codeJs: {
      type: String,
      required: true,
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

    return {
      btnToggleCodeTitle,
      copyHtmlToClipboard,
      copyJsToClipboard,
      isCodeVisible,
      toggleCode,
    };
  },
};
