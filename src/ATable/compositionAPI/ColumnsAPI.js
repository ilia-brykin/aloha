import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isColumnVisible,
} from "../utils/utils.js";
import {
  cloneDeep,
  filter,
  forEach,
  keyBy,
} from "lodash-es";

export default function ColumnsAPI(props, {
  columnsScrollInvisible = ref([]),
  indexFirstScrollInvisibleColumn = ref(undefined),
  modelColumnsVisibleLocal = ref({}),
  modelIsTableWithoutScroll = ref(false),
}) {
  const columns = toRef(props, "columns");
  const isActionColumnVisible = toRef(props, "isActionColumnVisible");
  const modelColumnsOrdering = toRef(props, "modelColumnsOrdering");
  const multipleActions = toRef(props, "multipleActions");

  const columnsKeyById = computed(() => {
    return keyBy(columns.value, "id");
  });

  const columnIdsGroupByLocked = computed(() => {
    const COLUMNS_GROUP_BY_LOCKED = {
      true: [],
      false: [],
      trueObject: {},
      falseObject: {},
      trueColumns: [],
      falseColumns: [],
    };
    forEach(cloneDeep(columns.value), column => {
      const COLUMN_ID = column.id;
      if (column.locked) {
        COLUMNS_GROUP_BY_LOCKED.true.push(COLUMN_ID);
        COLUMNS_GROUP_BY_LOCKED.trueColumns.push(column);
        COLUMNS_GROUP_BY_LOCKED.trueObject[COLUMN_ID] = true;
      } else {
        COLUMNS_GROUP_BY_LOCKED.false.push(COLUMN_ID);
        COLUMNS_GROUP_BY_LOCKED.falseColumns.push(column);
        COLUMNS_GROUP_BY_LOCKED.falseObject[COLUMN_ID] = true;
      }
    });
    return COLUMNS_GROUP_BY_LOCKED;
  });

  const columnsOrdered = computed(() => {
    if (!modelColumnsOrdering.value.length) {
      return [...columnIdsGroupByLocked.value.trueColumns, ...columnIdsGroupByLocked.value.falseColumns];
    }
    const COLUMNS = [];
    const COLUMNS_KEY_BY_ID = cloneDeep(columnsKeyById.value);
    forEach(modelColumnsOrdering.value, columnId => {
      if (COLUMNS_KEY_BY_ID[columnId]) {
        COLUMNS.push(COLUMNS_KEY_BY_ID[columnId]);
      }
    });

    return COLUMNS;
  });


  const columnsFilteredForRender = computed(() => {
    return filter(columnsOrdered.value, (column, columnIndex) => {
      return isColumnVisible({
        column,
        columnIndex,
        modelIsTableWithoutScroll: modelIsTableWithoutScroll.value,
        modelColumnsVisibleLocal: modelColumnsVisibleLocal.value,
        indexFirstScrollInvisibleColumn: indexFirstScrollInvisibleColumn.value,
      });
    });
  });

  const countNotHiddenColumns = computed(() => {
    let count = columnsFilteredForRender.value.length;
    if (modelIsTableWithoutScroll.value) {
      count += columnsScrollInvisible.value.length;
    }
    if (isActionColumnVisible.value) {
      count++;
    }
    if (multipleActions.value.length) {
      count++;
    }
    return count;
  });

  return {
    columnIdsGroupByLocked,
    columnsFilteredForRender,
    columnsOrdered,
    countNotHiddenColumns,
  };
}
