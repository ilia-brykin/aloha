import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import TableAPI from "./compositionAPI/TableAPI";

export default {
  name: "PageColorsText",
  components: {
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      colors,
    } = TableAPI();

    return {
      colors,
    };
  },
};
