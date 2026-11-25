export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AJsonEditor,
  AJsonEditorPlugins,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
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
      model,
      plugins,
      schema,
    };
  },
};`;

  return {
    codeJs,
  };
}
