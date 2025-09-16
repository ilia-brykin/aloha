export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchChange",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(undefined);

    const changeModel = ({ init }) => {
      console.log("changeModel init", init);
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
