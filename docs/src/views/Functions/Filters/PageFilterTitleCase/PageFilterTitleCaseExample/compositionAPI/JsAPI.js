import {
  computed,
} from "vue";

import {
  filterTitleCase,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterTitleCase("max mustermann");
// ${ filterTitleCase("max mustermann") }

filterTitleCase("jean-luc picard");
// ${ filterTitleCase("jean-luc picard") }

filterTitleCase("the NASA report");
// ${ filterTitleCase("the NASA report") }`;
  });

  return {
    codeJs,
  };
}
