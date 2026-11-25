import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorSelection",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com", "carl@example.com", "dora@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    });
    const paths = ref([]);
    const onSelectionChange = ({ paths: selected }) => {
      paths.value = selected;
    };

    return {
      codeHtml,
      codeJs,
      model,
      onSelectionChange,
      paths,
    };
  },
};
