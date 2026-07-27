import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
  isPlaceholderTranslate,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

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
  isModeOnePerGroup = computed(() => false),
  isMultiselect,
  modelValueLength,
  modelValueMultiselectFiltered = computed(() => []),
}) {
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const isSelectionCloseable = toRef(props, "isSelectionCloseable");
  const keyGroup = toRef(props, "keyGroup");
  const keyGroupLabelCallback = toRef(props, "keyGroupLabelCallback");
  const keyTitle = toRef(props, "keyTitle");
  const keyTitleCallback = toRef(props, "keyTitleCallback");
  const modelValue = toRef(props, "modelValue");
  const translateGroup = toRef(props, "translateGroup");

  const getTitleForItem = ({ item, _isModeOnePerGroup }) => {
    if (isFunction(keyTitleCallback.value)) {
      return keyTitleCallback.value({ item, inDropdown: false }) || "";
    }

    if (keyTitle.value) {
      return get(item, keyTitle.value) || "";
    }

    if (_isModeOnePerGroup) {
      const groupKey = get(item, keyGroup.value);
      if (groupKey) {
        let groupLabel = groupKey;
        if (isFunction(keyGroupLabelCallback.value)) {
          groupLabel = keyGroupLabelCallback.value({ item, inDropdown: false, group: groupKey });
        }

        if (translateGroup.value && isPlaceholderTranslate(groupLabel)) {
          groupLabel = getTranslatedText({
            placeholder: groupLabel,
            alwaysTranslate: alwaysTranslate.value,
          });
        }

        return `${ groupLabel }: ${ item[AKeyLabel] }`;
      }
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
          title += `${ index > 0 ? ", " : "" }${ getTitleForItem({ item: DATA, _isModeOnePerGroup: isModeOnePerGroup.value }) }`;
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
