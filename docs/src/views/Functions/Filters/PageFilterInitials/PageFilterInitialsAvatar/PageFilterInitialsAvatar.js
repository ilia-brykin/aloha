import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterInitialsAvatar",
  components: {
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
      codeJs,
      users,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      users,
    };
  },
};
