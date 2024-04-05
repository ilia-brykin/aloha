import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function LabelAPI(props) {
  const isLabelFloat = toRef(props, "isLabelFloat");
  const label = toRef(props, "label");
  const required = toRef(props, "required");

  const isLabel = computed(() => {
    return !isNil(label.value);
  });

  const labelLocal = computed(() => {
    return isLabel.value ?
      label.value :
      undefined;
  });

  const textAfterLabel = computed(() => {
    return required.value && isLabel.value ?
      "*" :
      "";
  });

  const titleLocal = computed(() => {
    if (isLabelFloat.value) {
      return labelLocal.value;
    }

    return undefined;
  });

  return {
    isLabel,
    labelLocal,
    textAfterLabel,
    titleLocal,
  };
}
