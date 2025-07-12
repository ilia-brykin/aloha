export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ADatepicker,
} from "aloha-vue";
    
export default {
  name: "PageDatepickerLabelDescription",
  components: {
    ADatepicker,
  },
  setup() {
    const model = ref(undefined);
    
    return {
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
