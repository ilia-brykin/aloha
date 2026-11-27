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
          id: "shipping",
          label: "_A_ACCORDION_EXAMPLE_SHIPPING_",
          content: "_A_ACCORDION_EXAMPLE_SHIPPING_CONTENT_",
          children: [
            {
              id: "germany",
              label: "_A_ACCORDION_EXAMPLE_GERMANY_",
              content: "_A_ACCORDION_EXAMPLE_GERMANY_CONTENT_",
            },
            {
              id: "abroad",
              label: "_A_ACCORDION_EXAMPLE_ABROAD_",
              content: "_A_ACCORDION_EXAMPLE_ABROAD_CONTENT_",
            },
          ],
        },
        {
          id: "payment",
          label: "_A_ACCORDION_EXAMPLE_PAYMENT_",
          content: "_A_ACCORDION_EXAMPLE_PAYMENT_CONTENT_",
        },
      ],
      indexesForOpen: ["0", "0.1"],
    };
  },
};`;

  return {
    codeJs,
  };
}
