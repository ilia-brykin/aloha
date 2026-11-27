import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export function isTabDisabled({ tab, disabled, keyDisabled }) {
  if (disabled) {
    return true;
  }
  return !!(keyDisabled && get(tab, keyDisabled) === true);
}

export default function DisabledAPI(props) {
  const disabled = toRef(props, "disabled");
  const keyDisabled = toRef(props, "keyDisabled");
  const tab = toRef(props, "tab");

  const isDisabled = computed(() => {
    return isTabDisabled({ tab: tab.value, disabled: disabled.value, keyDisabled: keyDisabled.value });
  });

  return {
    isDisabled,
  };
}
