import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";
import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageCloakPlugin",
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
