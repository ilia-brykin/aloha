import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function LabelAPI(props) {
  const label = toRef(props, "label");

  const hasLabel = computed(() => {
    return !isNil(label.value);
  });

  return {
    hasLabel,
  };
}
