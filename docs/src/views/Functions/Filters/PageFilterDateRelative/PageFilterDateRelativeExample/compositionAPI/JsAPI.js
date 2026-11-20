import {
  computed,
} from "vue";

import {
  filterDateRelative,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterDateRelative(new Date(Date.now() - 5 * 60 * 1000));
// ${ filterDateRelative(new Date(Date.now() - 5 * 60 * 1000)) }

filterDateRelative(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));
// ${ filterDateRelative(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)) }

filterDateRelative("Aloha");
// ${ filterDateRelative("Aloha") }`;
  });

  return {
    codeJs,
  };
}
