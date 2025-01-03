import {
  APageTabTitle,
  ATranslation,
} from "../../../../../src";
import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";

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
