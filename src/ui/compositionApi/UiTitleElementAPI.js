import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function UiTitleElementAPI(props) {
  const dataItem = toRef(props, "dataItem");
  const keyTitle = toRef(props, "keyTitle");
  const keyTitleCallback = toRef(props, "keyTitleCallback");

  const titleLocal = computed(() => {
    if (keyTitleCallback.value) {
      return keyTitleCallback.value({ item: dataItem.value });
    }
    if (keyTitle.value) {
      return get(dataItem.value, keyTitle.value);
    }
    return undefined;
  });

  return {
    titleLocal,
  };
}
