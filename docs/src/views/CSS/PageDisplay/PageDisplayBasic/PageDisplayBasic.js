import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import TableAPI from "../compositionAPI/TableAPI";

export default {
  name: "PageDisplayBasic",
  components: {
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      displays,
    } = TableAPI();

    return {
      displays,
    };
  },
};
