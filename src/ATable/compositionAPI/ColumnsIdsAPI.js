import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  keyBy,
} from "lodash-es";

export default function ColumnsIdsAPI(props) {
  const columns = toRef(props, "columns");

  const columnsKeyById = computed(() => {
    return keyBy(columns.value, "id");
  });

  const columnIdsGroupByLocked = computed(() => {
    const COLUMNS_GROUP_BY_LOCKED = {
      true: [],
      false: [],
      trueObject: {},
      falseObject: {},
    };
    forEach(columns.value, column => {
      const COLUMN_ID = column.id;
      if (column.locked) {
        COLUMNS_GROUP_BY_LOCKED.true.push(COLUMN_ID);
        COLUMNS_GROUP_BY_LOCKED.trueObject[COLUMN_ID] = true;
      } else {
        COLUMNS_GROUP_BY_LOCKED.false.push(COLUMN_ID);
        COLUMNS_GROUP_BY_LOCKED.falseObject[COLUMN_ID] = true;
      }
    });
    return COLUMNS_GROUP_BY_LOCKED;
  });

  return {
    columnsKeyById,
    columnIdsGroupByLocked,
  };
}
