import AList from "../../../../../src/AList/AList";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageListKeyId",
  components: {
    AList,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml
    } = HtmlAPI();
    const {
      codeJs
    } = JsAPI();

    const items1 = [
      {
        label: "Lorem",
        id: "1",
      },
      {
        label: "ipsum",
        id: "2",
      },
      {
        label: "dolor",
        id: "3",
      },
      {
        label: "Lorem",
        id: "4",
      },
    ];
    const items2 = [
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

    return {
      codeHtml,
      codeJs,
      items1,
      items2,
    };
  },
};
