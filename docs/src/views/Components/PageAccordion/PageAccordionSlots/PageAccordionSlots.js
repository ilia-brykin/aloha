import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AAccordion,
  AButton,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAccordionSlots",
  components: {
    AAccordion,
    AButton,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
    };
  },
  data() {
    return {
      data: [
        {
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
        },
        {
          slotButton: "returnsButton",
          slotContent: "returnsContent",
          isRenderBodyByFirstOpen: true,
        },
      ],
    };
  },
};
