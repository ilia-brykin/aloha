import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ModelAPI(props, {
  isContainer = computed(() => false),
}) {
  const filter = toRef(props, "filter");
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");
  const unappliedModel = toRef(props, "unappliedModel");

  const onUpdateModelFiltersLocal = model => {
    if (isContainer.value) {
      onUpdateModelFilters.value({ fullModel: model });
    } else {
      const UNAPPLIED_MODEL = cloneDeep(unappliedModel.value);
      UNAPPLIED_MODEL[filter.value.id] = cloneDeep(model);
      onUpdateModelFilters.value({ fullModel: UNAPPLIED_MODEL });
    }
  };

  return {
    onUpdateModelFiltersLocal,
  };
}
