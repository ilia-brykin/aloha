import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function UiDisabledElementAPI(props) {
  const dataItem = toRef(props, "dataItem");
  const disabled = toRef(props, "disabled");
  const keyDisabled = toRef(props, "keyDisabled");

  const disabledElement = computed(() => {
    if (disabled.value ||
      (keyDisabled.value && get(dataItem.value, keyDisabled.value))) {
      return true;
    }
    return undefined;
  });

  return {
    disabledElement,
  };
}
