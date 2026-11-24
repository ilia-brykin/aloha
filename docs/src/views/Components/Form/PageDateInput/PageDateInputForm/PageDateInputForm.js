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
  name: "PageDateInputForm",
  components: {
    AForm,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const dataForm = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
      },
      {
        type: "dateInput",
        id: "period",
        label: "_A_DATE_INPUT_EXAMPLE_TRAVEL_",
        range: true,
        required: true,
      },
    ];
    const model = ref({
      title: "Aloha",
      period: null,
    });

    return {
      codeHtml,
      codeJs,
      dataForm,
      model,
    };
  },
};
