import {
  computed,
  toRef,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

export default function TextsAPI(props) {
  const texts = toRef(props, "texts");

  const emptyText = computed(() => {
    if (isUndefined(texts.value.empty)) {
      return "_A_TABLE_EMPTY_TEXT_";
    }
    return texts.value.empty;
  });

  return {
    emptyText,
  };
}
