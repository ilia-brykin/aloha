import AButton from "../../../../../src/AButton/AButton";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageButtonOutline",
  components: {
    AButton,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const onAlert = type => {
      // eslint-disable-next-line no-alert
      alert(type);
    };

    return {
      codeHtml,
      codeJs,
      onAlert,
    };
  },
};
