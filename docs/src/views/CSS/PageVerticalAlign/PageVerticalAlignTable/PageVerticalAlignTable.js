import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import TableAPI from "./compositionAPI/TableAPI";

export default {
  name: "PageVerticalAlignTable",
  components: {
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      rows,
    } = TableAPI();

    return {
      rows,
    };
  },
};
