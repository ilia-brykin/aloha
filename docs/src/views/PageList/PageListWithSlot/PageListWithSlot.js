import {
  AList,
} from "aloha-vue";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageListWithSlot",
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
        label: "label 1",
        items: [
          {
            label: "label 1.1",
            items: [
              {
                label: "label 1.1.1",
              },
              {
                label: "label 1.1.2",
              },
              {
                label: "label 1.1.3",
              },
            ],
          },
          {
            label: "label 1.2",
          },
          {
            label: "label 1.3",
            items: [
              {
                label: "label 1.3.1",
              },
              {
                label: "label 1.3.2",
              },
              {
                label: "label 1.3.3",
              },
            ],
          },
        ],
      },
      {
        label: "level 2",
      },
      {
        label: "level 3",
      },
    ];

    return {
      codeHtml,
      codeJs,
      items,
    };
  },
};
