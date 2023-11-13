import {
  computed,
  toRef,
} from "vue";

import AKeyLabel from "../../const/AKeyLabel";
import {
  orderBy,
} from "lodash-es";

export default function UiDataSortAPI(props, {
  data = computed(() => []),
}) {
  const sortOrder = toRef(props, "sortOrder");

  const dataSort = computed(() => {
    if (sortOrder.value) {
      return orderBy(data.value, [AKeyLabel], [sortOrder.value]);
    }
    return data.value;
  });

  return {
    dataSort,
  };
}
