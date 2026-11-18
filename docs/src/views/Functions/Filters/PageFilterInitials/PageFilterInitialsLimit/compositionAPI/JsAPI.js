import {
  computed,
} from "vue";

import {
  filterInitials,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterInitials("Anna Maria Schmidt", { limit: 3 });
// ${ filterInitials("Anna Maria Schmidt", { limit: 3 }) }

filterInitials("Anna Maria Schmidt", { limit: 1 });
// ${ filterInitials("Anna Maria Schmidt", { limit: 1 }) }`;
  });

  return {
    codeJs,
  };
}
