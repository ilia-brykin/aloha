import {
  computed,
} from "vue";

import {
  filterFileSize,
} from "../../../../../../../../src";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterFileSize(1024, { digits: 0 });
// ${ filterFileSize(1024, { digits: 0 }) }

filterFileSize(10241, { digits: 2 });
// ${ filterFileSize(10241, { digits: 2 }) }`;
  });

  return {
    codeJs,
  };
}
