import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  APaginationPages,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePaginationPagesPage",
  components: {
    AlohaExample,
    APaginationPages,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const page = ref(3);
    const lastChange = ref(undefined);
    // change: { page, offset, limit }
    const onChange = value => {
      lastChange.value = value;
    };

    return {
      codeHtml,
      codeJs,
      lastChange,
      onChange,
      page,
    };
  },
};
