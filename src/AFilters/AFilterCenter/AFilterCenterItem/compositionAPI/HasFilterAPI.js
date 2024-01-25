import {
  computed,
  toRef,
} from "vue";

import {
  hasFilterCenter,
} from "../../utils/utils";

export default function HasFilterAPI(props) {
  const filter = toRef(props, "filter");
  const model = toRef(props, "model");

  const hasCurrentFilter = computed(() => {
    return hasFilterCenter({
      filter: filter.value,
      currentModel: model.value,
    });
  });

  return {
    hasCurrentFilter,
  };
}
