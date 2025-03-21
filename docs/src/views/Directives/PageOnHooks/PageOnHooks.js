import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageOnHooksExample from "./PageOnHooksExample/PageOnHooksExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageOnHooks",
  components: {
    AlohaPage,
    ATranslation,
    PageOnHooksExample,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    return {
      pageTitle,
    };
  },
};
