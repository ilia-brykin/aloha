import {
  APageTabTitle,
  ATranslation,
} from "../../../../../src";
import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageLoadingPlugin",
  components: {
    AlohaHighlightjs,
    APageTabTitle,
    ATranslation,
  },
  setup() {
    const {
      connectionCode,
      useCode,
    } = CodeAPI();

    return {
      connectionCode,
      useCode,
    };
  },
};
