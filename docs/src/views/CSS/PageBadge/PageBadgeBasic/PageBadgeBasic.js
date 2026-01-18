import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import TableAPI from "./compositionAPI/TableAPI";

export default {
  name: "PageBadgeBasic",
  components: {
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      badges,
    } = TableAPI();

    return {
      badges,
    };
  },
};
