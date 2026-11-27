export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  ATabs,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATabs,
  },
  setup() {
    const data = [
      {
        id: "tab1",
        label: "_A_TABS_TAB_1_",
        content: "_A_TABS_CONTENT_1_",
      },
      {
        id: "tab2",
        label: "_A_TABS_TAB_2_",
        content: "_A_TABS_CONTENT_2_",
      },
      {
        id: "tab3",
        label: "_A_TABS_TAB_3_",
        content: "_A_TABS_CONTENT_3_",
      },
    ];
    const activeTabId = ref("tab1");

    return {
      activeTabId,
      data,
    };
  },
};`;

  return {
    codeJs,
  };
}
