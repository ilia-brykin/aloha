export default function JsAPI() {
  const codeJs = `import {
  AAccordion,
  AButton,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
    AButton,
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
};`;

  return {
    codeJs,
  };
}
