import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PagePageTabTitlePlugin",
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
