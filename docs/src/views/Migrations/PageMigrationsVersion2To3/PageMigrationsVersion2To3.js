import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageMigrationsVersion2To3",
  components: {
    AlohaHighlightjs,
    APageTabTitle,
    ATranslation,
  },
  setup() {
    const {
      codeBtnClose,
      codeLabelPosition,
      codeConfigAfter,
      codeConfigBefore,
      codeRgb,
    } = CodeAPI();

    return {
      codeBtnClose,
      codeLabelPosition,
      codeConfigAfter,
      codeConfigBefore,
      codeRgb,
    };
  },
};
