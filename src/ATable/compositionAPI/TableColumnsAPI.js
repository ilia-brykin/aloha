import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
  keyBy,
} from "lodash-es";

export default function TableColumnsAPI(props) {
  const columns = toRef(props, "columns");

  const modelColumnsOrderingLocal = ref([]);

  const columnsKeyById = computed(() => {
    return keyBy(columns.value, "id");
  });

  const columnIdsGroupByLocked = computed(() => {
    const COLUMNS_GROUP_BY_LOCKED = {
      true: [],
      false: [],
    };
    forEach(columns.value, column => {
      const COLUMN_ID = column.id;
      if (column.locked) {
        COLUMNS_GROUP_BY_LOCKED.true.push(COLUMN_ID);
      } else {
        COLUMNS_GROUP_BY_LOCKED.false.push(COLUMN_ID);
      }
    });
    return COLUMNS_GROUP_BY_LOCKED;
  });

  const columnsOrdered = computed(() => {
    const COLUMNS = [];
    const COLUMNS_KEY_BY_ID = cloneDeep(columnsKeyById.value);
    const MODEL_COLUMNS_ORDERING_LOCAL = cloneDeep(modelColumnsOrderingLocal.value);

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
    modelColumnsOrderingLocal,
  };
}
