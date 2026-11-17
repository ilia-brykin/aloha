import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import {
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";
import GeneratorAPI from "./compositionAPI/GeneratorAPI";
import TokensAPI from "./compositionAPI/TokensAPI";

export default {
  name: "PageTheming",
  components: {
    AlohaHighlightjs,
    AlohaPage,
    ATranslation,
  },
  setup() {
    const {
      codeComponent,
      codeDarkTheme,
      codeDensity,
      codeFocus,
      codeLayers,
      codeQuickStart,
      codeScoped,
    } = CodeAPI();

    const {
      colorRows,
      colors,
      density,
      focusWidthInside,
      focusWidthOutside,
      generatedCode,
      gray,
      previewStyle,
      radius,
      readDefaults,
      theme,
    } = GeneratorAPI();

    const {
      tokenGroups,
    } = TokensAPI();

    return {
      codeComponent,
      codeDarkTheme,
      codeDensity,
      codeFocus,
      codeLayers,
      codeQuickStart,
      codeScoped,
      colorRows,
      colors,
      density,
      focusWidthInside,
      focusWidthOutside,
      generatedCode,
      gray,
      previewStyle,
      radius,
      readDefaults,
      theme,
      tokenGroups,
    };
  },
};
