import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isNil,
} from "lodash-es";

export default function HasFilterAPI(props) {
  const filter = toRef(props, "filter");
  const model = toRef(props, "model");

  const hasCurrentFilter = computed(() => {
    if (!filter.value ||
      filter.value.hideFilterCenter ||
      isNil(model.value) ||
      model.value === "" ||
      (isArray(model.value) && !model.value.length)) {
      return false;
    }
    return true;
  });

  return {
    hasCurrentFilter,
  };
}
