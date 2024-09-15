import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function LabelAPI(props) {
  const tab = toRef(props, "tab");
  const keyLabel = toRef(props, "keyLabel");

  const labelLocal = computed(() => {
    if (keyLabel.value) {
      return get(tab.value, keyLabel.value);
    }

    return undefined;
  });

  return {
    labelLocal,
  };
}
