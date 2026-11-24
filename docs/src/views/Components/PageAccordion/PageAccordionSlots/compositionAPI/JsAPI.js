export default function JsAPI() {
  const codeJs = `import {
  AAccordion,
  AButton,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AAccordion,
    AButton,
    ATranslation,
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
};`;

  return {
    codeJs,
  };
}
