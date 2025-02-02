import {
  AList,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageListKeyLabelCallback",
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
        label: "Item 1",
      },
      {
        label: "Item 2",
      },
      {
        label: "Item 3",
      },
      {
        label: "Item 4",
      },
    ];
    const keyLabelCallback = ({ item, itemIndex }) => `${ item.label } - Index: ${ itemIndex }`;

    return {
      codeHtml,
      codeJs,
      items,
      keyLabelCallback,
    };
  },
};
