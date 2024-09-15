import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function DisabledAPI(props) {
  const disabled = toRef(props, "disabled");
  const keyDisabled = toRef(props, "keyDisabled");
  const tab = toRef(props, "tab");

  const isDisabled = computed(() => {
    if (disabled.value) {
      return true;
    }

    if (keyDisabled.value && get(tab.value, keyDisabled.value) === true) {
      return true;
    }

    return undefined;
  });

  return {
    isDisabled,
  };
}
