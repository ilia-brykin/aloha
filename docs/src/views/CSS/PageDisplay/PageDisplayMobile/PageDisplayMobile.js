import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import TableAPI from "../compositionAPI/TableAPI";

export default {
  name: "PageDisplayMobile",
  components: {
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      displaysLength,
      rows,
    } = TableAPI();

    return {
      displaysLength,
      rows,
    };
  },
};
