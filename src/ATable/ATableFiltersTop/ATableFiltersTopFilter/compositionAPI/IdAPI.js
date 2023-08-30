import {
  computed,
  toRef,
} from "vue";

import {
  getHtmlId,
} from "../../../../ui/compositionApi/UiAPI";

export default function IdAPI(props) {
  const filter = toRef(props, "filter");
  const tableId = toRef(props, "tableId");

  const idPrefix = computed(() => {
    return `${ tableId.value }_`;
  });

  const htmlIdLocal = computed(() => {
    return getHtmlId({
      id: filter.value.id,
      idPrefix: idPrefix.value,
      htmlId: filter.value.htmlId,
    });
  });

  return {
    htmlIdLocal,
  };
}
