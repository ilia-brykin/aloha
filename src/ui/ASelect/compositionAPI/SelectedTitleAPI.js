import {
  computed,
  toRef,
} from "vue";

import AKeyLabel from "../../../const/AKeyLabel";
import {
  forEach,
} from "lodash-es";

export default function SelectedTitleAPI(props, {
  dataKeyByKeyIdLocal = computed(() => ({})),
  isModelLengthLimitExceeded,
  isModelValue = computed(() => false),
  isMultiselect,
  modelValueLength,
  modelValueMultiselectFiltered = computed(() => []),
}) {
  const modelValue = toRef(props, "modelValue");
  const isSelectionCloseable = toRef(props, "isSelectionCloseable");

  const selectedTitle = computed(() => {
    if (!isModelValue.value) {
      return undefined;
    }
    let title = "";
    if (isMultiselect.value) {
      if (isSelectionCloseable.value || !isModelLengthLimitExceeded.value) {
        forEach(modelValueMultiselectFiltered.value, (item, index) => {
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
