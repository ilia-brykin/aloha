import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function ColumnAdditionalSpaceAPI(props) {
  const column = toRef(props, "column");
  const columnsVisibleAdditionalSpaceForOneGrow = inject("columnsVisibleAdditionalSpaceForOneGrow", 0);

  const currentGrow = computed(() => {
    return isNil(column.value.grow) ? 1 : column.value.grow;
  });

  const additionalWidthForCurrentColumn = computed(() => {
    return columnsVisibleAdditionalSpaceForOneGrow.value * currentGrow.value;
  });

  return {
    additionalWidthForCurrentColumn,
  };
}
