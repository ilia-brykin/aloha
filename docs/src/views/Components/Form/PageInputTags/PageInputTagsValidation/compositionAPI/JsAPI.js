export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["anna@example.com"]);
    // before the checks: e-mails in lower case
    const transform = value => value.toLowerCase();
    // false: the default text, a text: own message, everything else: valid
    const validator = ({ tag }) => (/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(tag) ? true : "_A_INPUT_TAGS_EXAMPLE_NO_EMAIL_");

    return {
      model,
      transform,
      validator,
    };
  },
};`;

  return {
    codeJs,
  };
}
