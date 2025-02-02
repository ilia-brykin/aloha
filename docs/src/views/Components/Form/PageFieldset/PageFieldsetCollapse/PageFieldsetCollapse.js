import {
  ref,
} from "vue";

import {
  AFieldset,
} from "aloha-vue";
import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFieldsetCollapse",
  components: {
    AFieldset,
    AlohaExample,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text",
        id: "aloha1.text",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text",
        id: "aloha2.text",
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const toggleCollapse = ({ isCollapsed, id, props }) => {
      console.log(isCollapsed, id, props);
    };

    return {
      children1,
      children2,
      codeHtml,
      codeJs,
      model1,
      model2,
      toggleCollapse,
    };
  },
};
