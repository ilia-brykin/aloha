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
      codeHover,
      codeObjectFit,
      codeOpacity,
      codeOrder,
      codePointerEvents,
      codePrint,
      codeRatio,
      codeRoundedCircle,
      codeShadow,
      codeSizing,
      codeStack,
      codeStretchedLink,
      codeText,
      codeTextSelect,
      codeVisibility,
      codeZIndex,
      cursors,
      objectFits,
      opacities,
      ratios,
      shadows,
      zIndexLayers,
    } = CodeAPI();

    return {
      codeCursor,
      codeFocus,
      codeHover,
      codeObjectFit,
      codeOpacity,
      codeOrder,
      codePointerEvents,
      codePrint,
      codeRatio,
      codeRoundedCircle,
      codeShadow,
      codeSizing,
      codeStack,
      codeStretchedLink,
      codeText,
      codeTextSelect,
      codeVisibility,
      codeZIndex,
      cursors,
      objectFits,
      opacities,
      ratios,
      shadows,
      zIndexLayers,
    };
  },
};
