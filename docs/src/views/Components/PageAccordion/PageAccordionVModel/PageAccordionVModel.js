import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AAccordion,
  AButton,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAccordionVModel",
  components: {
    AAccordion,
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
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
        {
          label: "_A_ACCORDION_EXAMPLE_RETURNS_",
          content: "_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_",
        },
      ],
      idsOpen: ["1"],
    };
  },
  methods: {
    openAll() {
      this.idsOpen = ["0", "1", "2"];
    },

    closeAll() {
      this.idsOpen = [];
    },
  },
};
