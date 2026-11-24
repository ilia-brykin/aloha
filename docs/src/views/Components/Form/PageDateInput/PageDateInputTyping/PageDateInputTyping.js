import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADateInput,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDateInputTyping",
  components: {
    ADateInput,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref(null);
    // time "HH:mm", date "YYYY-MM-DD" or null
    const isLunch = time => time >= "12:00" && time < "13:00";

    return {
      codeHtml,
      codeJs,
      isLunch,
      model,
    };
  },
};
