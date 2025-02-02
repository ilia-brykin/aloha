import {
  ref,
} from "vue";

import {
  AList,
  ASwitch,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageListIsHtml",
  components: {
    AList,
    AlohaExample,
    ASwitch,
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
    const itemsWithChildren = [
      {
        label: "Level 1",
        children: [
          {
            label: "Level 1.1",
            children: [
              {
                label: "Level 1.1.1",
              },
              {
                label: "Level 1.1.2",
              },
            ],
          },
          {
            label: "Level 1.2",
            children: [
              {
                label: "Level 1.2.1",
              },
            ],
          },
        ],
      },
      {
        label: "Level 2",
        children: [
          {
            label: "Level 2.1",
          },
          {
            label: "Level 2.2",
          },
        ],
      },
    ];
    const itemsArrays = [
      "Level 1",
      [
        "Level 2",
        [
          "Level 2.1",
          "Level 2.2",
        ],
      ],
      [
        "Level 3",
        [
          "Level 3.1",
          [
            "Level 3.2",
            [
              "Level 3.2.1",
              "Level 3.2.2",
            ],
          ],
        ],
      ],
    ];
    const modelIsHtml = ref(false);

    return {
      codeHtml,
      codeJs,
      items,
      itemsArrays,
      itemsWithChildren,
      modelIsHtml,
    };
  },
};
