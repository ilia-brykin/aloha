import {
  computed,
} from "vue";

import filterFileSize from "../../../../../../../../src/filters/filterFileSize";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterFileSize(2000);
// ${ filterFileSize(2000) }

filterFileSize(1024);
// ${ filterFileSize(1024) }`;
  });

  return {
    codeJs,
  };
}
