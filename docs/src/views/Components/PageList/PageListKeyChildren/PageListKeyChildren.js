import {
  AList,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageListKeyChildren",
  components: {
    AList,
    AlohaExample,
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
        label: "Parent 1",
        children: [
          {
            label: "Child 1",
          },
          {
            label: "Child 2",
          },
        ],
      },
      {
        label: "Parent 2",
        children: [
          {
            label: "Child 3",
          },
          {
            label: "Child 4",
          },
        ],
      },
    ];

    return {
      codeHtml,
      codeJs,
      items,
    };
  },
};
