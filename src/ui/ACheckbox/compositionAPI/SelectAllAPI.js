import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../const/AKeys";
import {
  get,
  isFunction,
} from "lodash-es";

/**
 * "Select all" / "Deselect all" for ACheckbox.
 * Only the items that the user can change are affected:
 * disabled items are skipped and, while searching, only the found items count.
 */
export default function SelectAllAPI(props, {
  dataExtra = computed(() => []),
  dataValid = computed(() => []),
  modelValueObj = computed(() => ({})),
  onChangeModelValue = () => {},
  searching = computed(() => false),
  searchingElements = computed(() => ({})),
  searchingElementsExtra = computed(() => ({})),
}) {
  const disabled = toRef(props, "disabled");
  const isDeselectAll = toRef(props, "isDeselectAll");
  const isSelectAll = toRef(props, "isSelectAll");
  const keyDisabled = toRef(props, "keyDisabled");
  const keyDisabledCallback = toRef(props, "keyDisabledCallback");
  const modelValue = toRef(props, "modelValue");

  const isItemDisabled = item => {
    return !!((isFunction(keyDisabledCallback.value) && keyDisabledCallback.value({ item })) ||
      (keyDisabled.value && get(item, keyDisabled.value)));
  };

  const filterItems = (items, visible) => {
    return items.filter(item => {
      if (isItemDisabled(item)) {
        return false;
      }
      return !searching.value || !!visible[item[AKeyId]];
    });
  };

  const idsChangeable = computed(() => {
    return [
      ...filterItems(dataExtra.value, searchingElementsExtra.value),
      ...filterItems(dataValid.value, searchingElements.value),
    ].map(item => item[AKeyId]);
  });

  const isSelectAllVisible = computed(() => !!isSelectAll.value);

  const isDeselectAllVisible = computed(() => !!isDeselectAll.value);

  const hasSelectAllButtons = computed(() => {
    return isSelectAllVisible.value || isDeselectAllVisible.value;
  });

  const isSelectAllDisabled = computed(() => {
    return !!disabled.value ||
      idsChangeable.value.every(id => modelValueObj.value[id]);
  });

  const isDeselectAllDisabled = computed(() => {
    return !!disabled.value ||
      !idsChangeable.value.some(id => modelValueObj.value[id]);
  });

  const onSelectAll = $event => {
    if (isSelectAllDisabled.value) {
      return;
    }
    const MODEL = [...(modelValue.value || [])];
    idsChangeable.value.forEach(id => {
      if (!modelValueObj.value[id]) {
        MODEL.push(id);
      }
    });
    onChangeModelValue({
      model: MODEL,
      $event,
    });
  };

  const onDeselectAll = $event => {
    if (isDeselectAllDisabled.value) {
      return;
    }
    const IDS = {};
    idsChangeable.value.forEach(id => {
      IDS[id] = true;
    });
    onChangeModelValue({
      model: (modelValue.value || []).filter(id => !IDS[id]),
      $event,
    });
  };

  return {
    hasSelectAllButtons,
    isDeselectAllDisabled,
    isDeselectAllVisible,
    isSelectAllDisabled,
    isSelectAllVisible,
    onDeselectAll,
    onSelectAll,
  };
}
