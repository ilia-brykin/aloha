import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaHighlightjs from "../../../../global/components/AlohaHighlightjs/AlohaHighlightjs";

import ScssAPI from "./compositionAPI/ScssAPI";

export default {
  name: "PageSpacingConfig",
  components: {
    AlohaExample,
    AlohaHighlightjs,
  },
  setup() {
    const {
      codeScss,
    } = ScssAPI();

    return {
      codeScss,
    };
  },
};
