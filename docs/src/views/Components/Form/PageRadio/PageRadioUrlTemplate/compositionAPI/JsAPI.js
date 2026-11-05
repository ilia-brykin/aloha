export default function JsAPI() {
  const codeJsBasic = `import {
  ref,
} from "vue";

import {
  ARadio,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    ARadio,
    ASelect,
  },
  setup() {
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelBasic = ref(undefined);
    const templateDataBasic = ref({ file: "base" });
    const urlBasic = \`\${ import.meta.env.BASE_URL }assets/mock/select-{{ file }}.json\`;

    return {
      modelBasic,
      sources,
      templateDataBasic,
      urlBasic,
    };
  },
};`;
  const codeJsReactive = `import {
  ref,
} from "vue";

import {
  AInput,
  ARadio,
  ASelect,
} from "aloha-vue";

export default {
  components: {
    AInput,
    ARadio,
    ASelect,
  },
  setup() {
    const sources = [
      { id: "base", label: "_A_UI_URL_TEMPLATE_SOURCE_FIRST_" },
      { id: "retrieve", label: "_A_UI_URL_TEMPLATE_SOURCE_SECOND_" },
    ];
    const modelReactive = ref(undefined);
    const templateDataReactive = ref({ source: { file: "base" }, note: "" });
    const urlReactive = \`\${ import.meta.env.BASE_URL }assets/mock/select-{{ source.file }}.json\`;

    return {
      modelReactive,
      sources,
      templateDataReactive,
      urlReactive,
    };
  },
};`;

  return {
    codeJsBasic,
    codeJsReactive,
  };
}
