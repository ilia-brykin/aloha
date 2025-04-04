import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageQuickStart",
  components: {
    AlohaHighlightjs,
    APageTabTitle,
    ATranslation,
  },
  setup() {
    const {
      installCode,
      stylesCode,
      useInHtmlCode,
      useInMainCode,
    } = CodeAPI();

    return {
      installCode,
      stylesCode,
      useInHtmlCode,
      useInMainCode,
    };
  },
};
