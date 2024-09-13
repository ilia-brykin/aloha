export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AElement from "aloha-vue/src/AElement/AElement";
import AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";
    
export default {
  name: "PageTemplateFieldset",
  components: {
    AElement,
    AFieldset,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "template",
        slotName: "template",
      },
    ];
    const model = ref(undefined);
    
    return {
      children,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
