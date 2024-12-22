import {
  APageTabTitle,
  ATranslation,
} from "../../../../../src";
import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";

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
