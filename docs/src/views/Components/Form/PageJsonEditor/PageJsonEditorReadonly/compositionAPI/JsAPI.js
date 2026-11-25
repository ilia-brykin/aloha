export default function JsAPI() {
  const codeJs = `import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = {
      status: 200,
      data: { id: 7, items: [{ sku: "A1", qty: 2 }, { sku: "B4", qty: 1 }] },
      meta: { took: 12, cached: false },
    };

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
