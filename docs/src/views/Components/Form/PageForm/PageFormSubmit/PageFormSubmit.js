import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFormSubmit",
  components: {
    AlohaExample,
    AForm,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const data = [
      {
        type: "text",
        id: "search",
        label: "_A_FORM_EXAMPLE_SEARCH_",
      },
    ];
    const model = ref({});
    const countSubmit = ref(0);

    // Enter in the field: the page is not reloaded
    const onSubmit = () => {
      countSubmit.value++;
    };

    return {
      codeHtml,
      codeJs,
      countSubmit,
      data,
      model,
      onSubmit,
    };
  },
};
