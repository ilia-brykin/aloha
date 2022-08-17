import {
  computed,
  toRef,
} from "vue";

import AKeyLabel from "../../const/AKeyLabel";
import {
  orderBy,
} from "lodash-es";

export default function ASelectDataAPI(props, {
  dataLocal = computed(() => []),
}) {
  const sortOrder = toRef(props, "sortOrder");
  const dataSort = computed(() => {
    if (sortOrder.value) {
      return orderBy(dataLocal.value, [AKeyLabel], [sortOrder.value]);
    }
    return dataLocal.value;
  });

  const dataFiltered = computed(() => {
    // TODO:
    return dataSort.value;
  });

  return {
    dataFiltered,
  };
}
