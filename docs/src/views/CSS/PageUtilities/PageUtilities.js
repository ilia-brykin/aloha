import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import {
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageUtilities",
  components: {
    AlohaExample,
    AlohaPage,
    ATranslation,
  },
  setup() {
    const {
      codeCursor,
      codeFocus,
      codeOpacity,
      codeOrder,
      codePointerEvents,
      codePrint,
      codeRoundedCircle,
      codeShadow,
      codeText,
      codeTextSelect,
      codeVisibility,
      codeZIndex,
      cursors,
      opacities,
      shadows,
      zIndexLayers,
    } = CodeAPI();

    return {
      codeCursor,
      codeFocus,
      codeOpacity,
      codeOrder,
      codePointerEvents,
      codePrint,
      codeRoundedCircle,
      codeShadow,
      codeText,
      codeTextSelect,
      codeVisibility,
      codeZIndex,
      cursors,
      opacities,
      shadows,
      zIndexLayers,
    };
  },
};
