import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorSchema",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      id: 1,
      price: -5,
      color: "pink",
    });
    // a subset of JSON Schema; "add" takes the next key of "properties"
    const schema = {
      type: "object",
      required: ["id", "name", "price"],
      additionalProperties: false,
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 3 },
        price: { type: "number", minimum: 0 },
        color: { enum: ["red", "green", "blue"] },
        tags: { type: "array", items: { type: "string" }, maxItems: 5 },
      },
    };

    return {
      codeHtml,
      codeJs,
      model,
      schema,
    };
  },
};
