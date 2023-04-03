import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function TableColumnsAPI(props, {
  columnIdsGroupByLocked = computed(() => ({
    true: [],
    false: [],
    trueObject: {},
    falseObject: {},
    trueColumns: [],
    falseColumns: [],
  })),
  columnsKeyById = computed(() => ({})),
}) {
  const modelColumnsOrdering = toRef(props, "modelColumnsOrdering");

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

  const columnsOrderedAlt = computed(() => {
    const COLUMNS = [];
    const COLUMNS_KEY_BY_ID = cloneDeep(columnsKeyById.value);
    const MODEL_COLUMNS_ORDERING_LOCAL = cloneDeep(modelColumnsOrdering.value);

    forEach(columnIdsGroupByLocked.value.true, columnId => {
      if (COLUMNS_KEY_BY_ID[columnId]) {
        COLUMNS.push(COLUMNS_KEY_BY_ID[columnId]);
        delete COLUMNS_KEY_BY_ID[columnId];

        const INDEX_IN_MODEL_COLUMNS_ORDERING = MODEL_COLUMNS_ORDERING_LOCAL.indexOf(columnId);
        if (INDEX_IN_MODEL_COLUMNS_ORDERING !== -1) {
          MODEL_COLUMNS_ORDERING_LOCAL.splice(INDEX_IN_MODEL_COLUMNS_ORDERING, 1);
        }
      }
    });

    forEach(MODEL_COLUMNS_ORDERING_LOCAL, columnId => {
      if (COLUMNS_KEY_BY_ID[columnId]) {
        COLUMNS.push(COLUMNS_KEY_BY_ID[columnId]);
        delete COLUMNS_KEY_BY_ID[columnId];
      }
    });

    forEach(COLUMNS_KEY_BY_ID, column => {
      COLUMNS.push(column);
    });

    return COLUMNS;
  });

  return {
    columnsKeyById,
    columnsOrdered,
    columnsOrderedAlt,
  };
}
