import {
  computed,
  toRef,
} from "vue";

import {
  aOrderBy,
} from "../../utils/utils";

import {
  AKeyLabel,
} from "../../const/AKeys";

export default function UiDataSortAPI(props, {
  data = computed(() => []),
}) {
  const sortOrder = toRef(props, "sortOrder");

  const dataSort = computed(() => {
    if (sortOrder.value) {
      return aOrderBy(data.value, [AKeyLabel], [sortOrder.value]);
    }
    return data.value;
  });

  return {
    dataSort,
  };
}
