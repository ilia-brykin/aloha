import {
  computed,
} from "vue";

import {
  filterFileSize,
} from "aloha-vue";

export default function JsAPI() {
  const codeJs = computed(() => {
    return `filterFileSize(1024, { sourceUnits: "b" });
// ${ filterFileSize(1024, { sourceUnits: "b" }) }

filterFileSize(2, { sourceUnits: "kb" });
// ${ filterFileSize(2, { sourceUnits: "kb" }) }

filterFileSize(1, { sourceUnits: "mb" });
// ${ filterFileSize(1, { sourceUnits: "mb" }) }

filterFileSize(0.1, { sourceUnits: "gb" });
// ${ filterFileSize(0.1, { sourceUnits: "gb" }) }

filterFileSize(0.0001, { sourceUnits: "tb" });
// ${ filterFileSize(0.0001, { sourceUnits: "tb" }) }`;
  });

  return {
    codeJs,
  };
}
