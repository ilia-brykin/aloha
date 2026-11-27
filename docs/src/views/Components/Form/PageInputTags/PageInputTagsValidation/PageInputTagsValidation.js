import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputTags,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputTagsValidation",
  components: {
    AInputTags,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref(["anna@example.com"]);
    // before the checks: e-mails in lower case
    const transform = value => value.toLowerCase();
    // false: the default text, a text: own message, everything else: valid
    const validator = ({ tag }) => (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(tag) ? true : "_A_INPUT_TAGS_EXAMPLE_NO_EMAIL_");

    return {
      codeHtml,
      codeJs,
      model,
      transform,
      validator,
    };
  },
};
