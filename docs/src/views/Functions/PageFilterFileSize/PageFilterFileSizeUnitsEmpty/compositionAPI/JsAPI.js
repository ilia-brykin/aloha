import {
  computed,
} from "vue";

import filterFileSize from "../../../../../../../src/filters/filterFileSize";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterFileSize(1024, { units: "" });
// ${ filterFileSize(1024, { units: "" }) }

filterFileSize(1048576, { units: "" });
// ${ filterFileSize(1048576, { units: "" }) }

filterFileSize(1073741824, { units: "" });
// ${ filterFileSize(1073741824, { units: "" }) }

filterFileSize(1073741824 * 1024, { units: "" });
// ${ filterFileSize(1073741824 * 1024, { units: "" }) }`;
  });

  return {
    codeJs,
  };
}
