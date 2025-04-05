import {
  computed,
  toRef,
} from "vue";

import {
  AKeyLabel,
} from "../../../const/AKeys";
import {
  forEach,
  get,
  isFunction,
} from "lodash-es";

export default function SelectedTitleAPI(props, {
  dataKeyByKeyIdLocal = computed(() => ({})),
  isModelLengthLimitExceeded,
  isModelValue = computed(() => false),
  isMultiselect,
  modelValueLength,
  modelValueMultiselectFiltered = computed(() => []),
}) {
  const isSelectionCloseable = toRef(props, "isSelectionCloseable");
  const keyTitle = toRef(props, "keyTitle");
  const keyTitleCallback = toRef(props, "keyTitleCallback");
  const modelValue = toRef(props, "modelValue");

  const getTitleForItem = ({ item }) => {
    if (isFunction(keyTitleCallback.value)) {
      return keyTitleCallback.value({ item, inDropdown: false }) || "";
    }
    if (keyTitle.value) {
      return get(item, keyTitle.value) || "";
    }

    return item[AKeyLabel];
  };

  const selectedTitle = computed(() => {
    if (!isModelValue.value) {
      return undefined;
    }
    let title = "";
    if (isMultiselect.value) {
      if (isSelectionCloseable.value || !isModelLengthLimitExceeded.value) {
        forEach(modelValueMultiselectFiltered.value, (item, index) => {
          const DATA = dataKeyByKeyIdLocal.value[item] || {};
          title += `${ index > 0 ? ", " : "" }${ getTitleForItem({ item: DATA }) }`;
        });
      } else {
        title = `${ modelValueLength.value } ausgewählt`;
      }
    } else {
      const DATA = dataKeyByKeyIdLocal.value[modelValue.value] || {};
      title = getTitleForItem({ item: DATA });
    }

    return title;
  });

  const hasSelectedTitle = computed(() => {
    return !!selectedTitle.value;
  });

  return {
    hasSelectedTitle,
    selectedTitle,
  };
}
