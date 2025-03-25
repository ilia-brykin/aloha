import {
  computed,
  toRef,
} from "vue";

import {
  get, isFunction,
} from "lodash-es";

export default function UiDisabledElementAPI(props) {
  const dataItem = toRef(props, "dataItem");
  const disabled = toRef(props, "disabled");
  const keyDisabled = toRef(props, "keyDisabled");
  const keyDisabledCallback = toRef(props, "keyDisabledCallback");

  const disabledElement = computed(() => {
    if (disabled.value ||
      (isFunction(keyDisabledCallback.value) && keyDisabledCallback.value({ item: dataItem.value })) ||
      (keyDisabled.value && get(dataItem.value, keyDisabled.value))) {
      return true;
    }

    return undefined;
  });

  return {
    disabledElement,
  };
}
