import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import {
  ATranslation,
} from "aloha-vue";

import CodeAPI from "./compositionAPI/CodeAPI";

export default {
  name: "PageTile",
  components: {
    AlohaExample,
    AlohaPage,
    ATranslation,
  },
  setup() {
    const {
      codeBasic,
      codeClickable,
      codeColors,
      codeGrid,
      codeParts,
    } = CodeAPI();

    return {
      codeBasic,
      codeClickable,
      codeColors,
      codeGrid,
      codeParts,
    };
  },
};
