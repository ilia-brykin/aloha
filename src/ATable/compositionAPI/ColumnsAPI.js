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
  forEach,
  keyBy,
} from "lodash-es";

export default function ColumnsAPI(props, {
  columnsScrollInvisible = ref([]),
  indexFirstScrollInvisibleColumn = ref(undefined),
  modelColumnsVisibleLocal = ref({}),
  modelIsTableWithoutScrollComputed = computed(() => false),
  columnsOrderedFromSimpleTable = computed(() => []),
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
    if (columnsOrderedFromSimpleTable.value && columnsOrderedFromSimpleTable.value.length) {
      return columnsOrderedFromSimpleTable.value;
    }
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

  const columnsFilteredForRenderObj = computed(() => {
    const COLUMNS = [];
    const COLUMNS_INDEXES_MAPPING = {};
    forEach(columnsOrdered.value, (column, columnIndex) => {
      if (isColumnVisible({
        column,
        columnIndex,
        modelIsTableWithoutScroll: modelIsTableWithoutScrollComputed.value,
        modelColumnsVisibleLocal: modelColumnsVisibleLocal.value,
        indexFirstScrollInvisibleColumn: indexFirstScrollInvisibleColumn.value,
      })) {
        COLUMNS_INDEXES_MAPPING[COLUMNS.length] = columnIndex;
        COLUMNS.push(column);
      }
    });

    return {
      columns: COLUMNS,
      columnsIndexesMapping: COLUMNS_INDEXES_MAPPING,
    };
  });

  const columnsFilteredForRenderIndexesMapping = computed(() => {
    return columnsFilteredForRenderObj.value.columnsIndexesMapping;
  });


  const columnsFilteredForRender = computed(() => {
    return columnsFilteredForRenderObj.value.columns;
  });

  const countNotHiddenColumns = computed(() => {
    let count = columnsFilteredForRender.value.length;
    if (modelIsTableWithoutScrollComputed.value) {
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
    columnsFilteredForRenderIndexesMapping,
    columnsOrdered,
    countNotHiddenColumns,
  };
}
