import {
  APageTabTitle,
  ATranslation,
} from "../../../../../src";
import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageIconsPlugin",
  components: {
    AlohaHighlightjs,
    APageTabTitle,
    ATranslation,
  },
  setup() {
    const {
      connectionCode,
      useAButtonCode,
      useAIconCode,
    } = CodeAPI();

    return {
      connectionCode,
      useAButtonCode,
      useAIconCode,
    };
  },
};
