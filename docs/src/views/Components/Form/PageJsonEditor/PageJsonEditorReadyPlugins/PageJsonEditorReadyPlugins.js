import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
  AJsonEditorPlugins,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorReadyPlugins",
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
      name: "Desk lamp",
      color: "#0775b0",
      background: "rgba(7, 117, 176, 0.25)",
      size: "m",
      released: "2025-03-05",
      updatedAt: "2025-11-20T08:15:00Z",
      website: "https://github.com/ilia-brykin/aloha",
      picture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
      available: true,
    });
    // all ready plugins: color, date, image, url, boolean as a switch (or only some: [AJsonEditorColorPlugin])
    const plugins = AJsonEditorPlugins;
    // "enum" of the schema (or of the rules): the value is edited with a select
    const schema = {
      type: "object",
      properties: {
        size: { enum: ["s", "m", "l", "xl"] },
      },
    };

    return {
      codeHtml,
      codeJs,
      model,
      plugins,
      schema,
    };
  },
};
