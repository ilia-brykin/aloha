export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioChange",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(undefined);
    
    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };
    
    return {
      changeModel,
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
