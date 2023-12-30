import {
  ref,
} from "vue";

import AList from "../../../../../src/AList/AList";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ARadio from "../../../../../src/ui/ARadio/ARadio";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageListTag",
  components: {
    AList,
    AlohaExample,
    ARadio,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];
    const modelTag = ref("ol");

    return {
      codeHtml,
      codeJs,
      items,
      modelTag,
    };
  },
};
