import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import {
  APageTabTitle,
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageMigrationsVersion1To2",
  components: {
    AlohaHighlightjs,
    APageTabTitle,
    ATranslation,
  },
  setup() {
    const {
      importCode,
      importCssCode,
      importsAlohaVueCode,
    } = CodeAPI();

    return {
      importCode,
      importCssCode,
      importsAlohaVueCode,
    };
  },
};
