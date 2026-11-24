export default function JsAPI() {
  const codeJs = `import {
  AAccordion,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
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
          disabled: true,
        },
      ],
    };
  },
};`;

  return {
    codeJs,
  };
}
