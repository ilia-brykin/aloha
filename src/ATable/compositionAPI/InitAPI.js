import {
  ref,
  toRef,
} from "vue";

import {
  getModelColumnsVisibleDefault,
} from "../utils/utils";
import {
  cloneDeep,
  size,
} from "lodash-es";

export default function InitAPI(props, { emit }, {
  checkColumnsOrdering = () => {
  },
  checkVisibleColumns = () => {
  },
  modelColumnsVisibleLocal = ref({}),
}) {
  const modelColumnsVisible = toRef(props, "modelColumnsVisible");
  const columns = toRef(props, "columns");

  const initTable = () => {
    const {
      shouldFixColumns: shouldFixOrderingColumns,
      modelColumnsOrderingLocal,
    } = checkColumnsOrdering();

    let shouldFixVisibleColumns = false;
    if (size(modelColumnsVisible.value)) {
      modelColumnsVisibleLocal.value = cloneDeep(modelColumnsVisible.value);
    } else {
      shouldFixVisibleColumns = true;
      modelColumnsVisibleLocal.value = getModelColumnsVisibleDefault(columns.value);
      checkVisibleColumns();
    }

    emit("initTable", cloneDeep({
      columnsOrdering: {
        model: modelColumnsOrderingLocal,
        shouldFix: shouldFixOrderingColumns,
      },
      columnsVisible: {
        model: modelColumnsVisibleLocal.value,
        shouldFix: shouldFixVisibleColumns,
      },
    }));
  };

  return {
    initTable,
  };
}
