import AList from "../../../../../src/AList/AList";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "AListWithoutChildren",
  components: {
    AList,
    AlohaExample,
  },
  setup() {
    const { codeHtml } = HtmlAPI();
    const { codeJs } = JsAPI();

    const items = [
      {
        label: "level 1",
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
