export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AInput from "aloha-vue/src/ui/AInput/AInput";
    
export default {
  name: "PageInputChange",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
