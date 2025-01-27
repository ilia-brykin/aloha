import {
  computed,
} from "vue";

import {
  filterFileSize,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterFileSize(1024, { units: "b" });
// ${ filterFileSize(1024, { units: "b" }) }

filterFileSize(1024, { units: "kb" });
// ${ filterFileSize(1024, { units: "kb" }) }

filterFileSize(1048576, { units: "mb" });
// ${ filterFileSize(1048576, { units: "mb" }) }

filterFileSize(1073741824, { units: "gb" });
// ${ filterFileSize(1073741824, { units: "gb" }) }

filterFileSize(1073741824 * 1024, { units: "tb" });
// ${ filterFileSize(1073741824 * 1024, { units: "tb" }) }`;
  });

  return {
    codeJs,
  };
}
