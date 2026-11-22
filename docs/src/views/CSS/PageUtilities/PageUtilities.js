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
      borderSubtleColors,
      codeBorderStyle,
      codeCursor,
      codeDividerVertical,
      codeFocus,
      codeHover,
      codeObjectFit,
      codeOpacity,
      codeOrder,
      codePointerEvents,
      codePrint,
      codeRadius,
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
      radii,
      ratios,
      shadows,
      zIndexLayers,
    } = CodeAPI();

    return {
      borderSubtleColors,
      codeBorderStyle,
      codeCursor,
      codeDividerVertical,
      codeFocus,
      codeHover,
      codeObjectFit,
      codeOpacity,
      codeOrder,
      codePointerEvents,
      codePrint,
      codeRadius,
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
      radii,
      ratios,
      shadows,
      zIndexLayers,
    };
  },
};
