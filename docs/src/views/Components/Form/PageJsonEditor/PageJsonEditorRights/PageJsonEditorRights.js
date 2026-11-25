import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorRights",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      id: 42,
      created: "2025-03-05",
      email: "anna@example.com",
      password: "secret",
      roles: ["editor"],
      profile: { firstName: "Anna", lastName: "Muster" },
    });

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
