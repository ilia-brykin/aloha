import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PagePropsDefaultPlugin",
  components: {
    AlohaHighlightjs,
    APageTabTitle,
    ATranslation,
  },
  setup() {
    const {
      connectionCode,
      ownComponentCode,
    } = CodeAPI();

    return {
      connectionCode,
      ownComponentCode,
    };
  },
};
