export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleDataExtended",
  components: {
    ASelectStyle,
  },
  setup() {
    const dataExtended = [
      {
        label: "_A_SELECT_STYLES_VALUE_BG_ALOHA_",
        value: "a_bg_aloha",
        group: "background_color",
        groupName: "_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_",
      },
    ];
    const model1 = ref(undefined);

    return {
      dataExtended,
      model1,
    };
  },
};`;

  return {
    codeJs,
  };
}
