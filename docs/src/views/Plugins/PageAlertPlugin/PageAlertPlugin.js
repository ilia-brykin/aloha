import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";
import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageAlertPlugin",
  components: {
    AlohaHighlightjs,
    APageTabTitle,
    ATranslation,
  },
  setup() {
    const {
      connectionCode,
      pluginCode,
    } = CodeAPI();

    return {
      connectionCode,
      pluginCode,
    };
  },
};
