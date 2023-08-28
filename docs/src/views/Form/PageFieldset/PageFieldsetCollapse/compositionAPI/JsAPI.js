export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AFieldset from "aloha-vue/src/ui/AFieldset/AFieldset";
    
export default {
  name: "PageFieldsetCollapse",
  components: {
    AFieldset,
  },
};`;

  return {
    codeJs,
  };
}
