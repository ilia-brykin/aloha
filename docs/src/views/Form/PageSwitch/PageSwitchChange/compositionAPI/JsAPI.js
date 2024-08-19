export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
    
export default {
  name: "PageSwitchChange",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
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
