import {
  computed,
  toRef,
} from "vue";

import AKeyLabel from "../../const/AKeyLabel";
import {
  forEach,
} from "lodash-es";

export default function ASelectSelectedTitleAPI(props, {
  isModelValue = computed(() => false),
  isMultiselect,
  isModelLengthLimitExceeded,
  modelValue,
  modelValueLength,
  dataKeyByKeyIdLocal = computed(() => ({})),
}) {
  const isSelectionCloseable = toRef(props, "isSelectionCloseable");

  const selectedTitle = computed(() => {
    if (!isModelValue.value) {
      return undefined;
    }
    let title = "";
    if (isMultiselect.value) {
      if (isSelectionCloseable.value || !isModelLengthLimitExceeded.value) {
        forEach(modelValue.value, (item, index) => {
          const DATA = dataKeyByKeyIdLocal.value[item] || {};
          title += `${ index > 0 ? ", " : "" }${ DATA[AKeyLabel] }`;
        });
      } else {
        title = `${ modelValueLength.value } ausgewählt`;
      }
    } else {
      const DATA = dataKeyByKeyIdLocal.value[modelValue.value] || {};
      title = DATA[AKeyLabel];
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
