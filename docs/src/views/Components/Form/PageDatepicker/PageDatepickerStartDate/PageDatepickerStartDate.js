import {
  computed,
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADatepicker,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDatepickerStartDate",
  components: {
    ADatepicker,
    AlohaExample,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref("2025-05-16T06:03:05.000Z");
    const model3 = ref("2025-05-16T06:03:05.000Z");

    const dateNextYear = computed(() => {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);

      return date.toISOString();
    });

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      dateNextYear,
      model1,
      model2,
      model3,
    };
  },
};
