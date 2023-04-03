import {
  computed,
  toRef,
  watch,
} from "vue";

import {
  cloneDeep,
  forEach,
} from "lodash-es";


export default function ColumnsOrderingAPI(props, { emit }, {
  checkVisibleColumns = () => {},
  columnIdsGroupByLocked = computed(() => ({
    true: [],
    false: [],
    trueObject: {},
    falseObject: {},
  })),
}) {
  const columns = toRef(props, "columns");
  const modelColumnsOrdering = toRef(props, "modelColumnsOrdering");

  const changeColumnsOrdering = ({ columnIndexDraggable, columnIndexOver }) => {
    if (columnIndexDraggable === columnIndexOver) {
      return;
    }
    const MODEL_COLUMNS_ORDERING = cloneDeep(modelColumnsOrdering.value);
    const ID_DRAGGABLE = MODEL_COLUMNS_ORDERING[columnIndexDraggable];
    MODEL_COLUMNS_ORDERING.splice(columnIndexDraggable, 1);
    MODEL_COLUMNS_ORDERING.splice(columnIndexOver, 0, ID_DRAGGABLE);

    emit("changeColumnsOrdering", {
      columnIndexDraggable,
      columnIndexOver,
      modelColumnsOrdering: MODEL_COLUMNS_ORDERING,
    });
    checkVisibleColumns();
  };

  const checkColumnsOrdering = ({ isFirst } = {}) => {
    let modelColumnsOrderingLocal = [];
    let shouldFixColumns = false;
    if (!modelColumnsOrdering.value.length) {
      modelColumnsOrderingLocal = [...columnIdsGroupByLocked.value.true, ...columnIdsGroupByLocked.value.false];
      shouldFixColumns = true;
    } else {
      modelColumnsOrderingLocal = [...columnIdsGroupByLocked.value.true];
      const COLUMNS_NOT_LOCKED_IDS = cloneDeep(columnIdsGroupByLocked.value.falseObject);
      forEach(modelColumnsOrdering.value, columnId => {
        if (COLUMNS_NOT_LOCKED_IDS[columnId]) {
          modelColumnsOrderingLocal.push(columnId);
          delete COLUMNS_NOT_LOCKED_IDS[columnId];
        }
      });

      forEach(COLUMNS_NOT_LOCKED_IDS, (_, columnId) => {
        modelColumnsOrderingLocal.push(columnId);
      });
      
      if (JSON.stringify(modelColumnsOrdering.value) !== JSON.stringify(modelColumnsOrderingLocal)) {
        shouldFixColumns = true;
      }
    }
    if (shouldFixColumns) {
      emit("changeColumnsOrdering", {
        modelColumnsOrdering: modelColumnsOrderingLocal,
        isFirst,
        shouldFixColumns,
      });
    }
  };

  watch(columns, () => {
    checkColumnsOrdering();
  }, {
    deep: true,
  });

  return {
    changeColumnsOrdering,
    checkColumnsOrdering,
  };
}
