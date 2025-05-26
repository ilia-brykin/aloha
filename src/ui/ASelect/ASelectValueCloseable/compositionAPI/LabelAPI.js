import {
  computed,
  toRef,
} from "vue";

import {
  AKeyLabel,
} from "../../../../const/AKeys";

export default function LabelAPI(props) {
  const data = toRef(props, "data");

  const currentLabel = computed(() => {
    return data.value[AKeyLabel];
  });

  return {
    currentLabel,
  };
}
