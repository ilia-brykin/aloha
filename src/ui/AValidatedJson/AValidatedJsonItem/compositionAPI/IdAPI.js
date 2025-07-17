import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../../const/AKeys";

export default function IdAPI(props) {
  const parentHtmlId = toRef(props, "parentHtmlId");
  const modelIndex = toRef(props, "modelIndex");
  const mode = toRef(props, "mode");
  const modelItem = toRef(props, "modelItem");

  const idLocal = computed(() => {
    if (mode.value === "list") {
      return `${ parentHtmlId.value }_${ modelIndex.value }`;
    }

    return `${ parentHtmlId.value }_${ modelItem.value[AKeyId] }`;
  });

  return {
    idLocal,
  };
}
