import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import TableAPI from "./compositionAPI/TableAPI";

export default {
  name: "PageColorsBg",
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
