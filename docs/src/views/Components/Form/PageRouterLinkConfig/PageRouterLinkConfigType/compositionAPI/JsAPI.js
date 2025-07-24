export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARouterLinkConfig,
} from "aloha-vue";
    
export default {
  name: "PageRouterLinkConfigType",
  components: {
    ARouterLinkConfig,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    
    return {
      model1,
      model2,
    };
  },
};`;

  return {
    codeJs,
  };
}
