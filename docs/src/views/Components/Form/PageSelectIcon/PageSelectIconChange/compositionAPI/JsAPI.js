export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASelectIcon,
} from "aloha-vue";
    
export default {
  name: "PageSelectIconChange",
  components: {
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    const changeModel1 = ({ model: _model, id, props, item }) => {
      model1.value = _model;
      console.log(id, props, item);
    };
    const changeModel2 = ({ model: _model, id, props, item }) => {
      model2.value = _model;
      console.log(id, props, item);
    };
    
    return {
      changeModel1,
      changeModel2,
      model1,
      model2,
    };
  },
};`;

  return {
    codeJs,
  };
}
