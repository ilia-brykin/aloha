import {
  computed,
  toRef,
} from "vue";

import {
  AKeyLabel,
} from "../../../../const/AKeys";
import {
  isArray,
  isPlainObject,
  isString,
} from "lodash-es";

export default function LabelAPI(props) {
  const errorLabels = toRef(props, "errorLabels");

  const currentLabel = computed(() => {
    if (isString(errorLabels.value)) {
      return errorLabels.value;
    }

    if (isPlainObject(errorLabels.value)) {
      return errorLabels.value[AKeyLabel];
    }

    return "";
  });

  const isErrorLabelsArray = computed(() => {
    return isArray(errorLabels.value);
  });

  return {
    currentLabel,
    isErrorLabelsArray,
  };
}
