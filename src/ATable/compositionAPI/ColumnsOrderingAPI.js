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
    trueColumns: [],
    falseColumns: [],
  })),
  columnsFilteredForRenderIndexesMapping = computed(() => ({})),
}) {
  const columns = toRef(props, "columns");
  const modelColumnsOrdering = toRef(props, "modelColumnsOrdering");

  const changeColumnsOrdering = ({ columnIndexDraggable, columnIndexOver, reset, inHeader }) => {
    if (columnIndexDraggable === columnIndexOver && !reset) {
      return;
    }
    // Not all columns may be shown, so the order may be out of order
    if (inHeader) {
      columnIndexDraggable = columnsFilteredForRenderIndexesMapping.value[columnIndexDraggable];
      columnIndexOver = columnsFilteredForRenderIndexesMapping.value[columnIndexOver];
    }
    let modelColumnsOrderingLocal = [];
    if (reset) {
      modelColumnsOrderingLocal = [...columnIdsGroupByLocked.value.true, ...columnIdsGroupByLocked.value.false];
    } else {
      modelColumnsOrderingLocal = cloneDeep(modelColumnsOrdering.value);
      const ID_DRAGGABLE = modelColumnsOrderingLocal[columnIndexDraggable];
      modelColumnsOrderingLocal.splice(columnIndexDraggable, 1);
      modelColumnsOrderingLocal.splice(columnIndexOver, 0, ID_DRAGGABLE);
    }

    emit("changeColumnsOrdering", {
      columnIndexDraggable,
      columnIndexOver,
      modelColumnsOrdering: modelColumnsOrderingLocal,
    });
    setTimeout(() => {
      checkVisibleColumns();
    });
  };

  const checkColumnsOrdering = () => {
    let modelColumnsOrderingLocal = [];
    let shouldFixColumns = false;
    if (!modelColumnsOrdering.value.length) {
      modelColumnsOrderingLocal = [...columnIdsGroupByLocked.value.true, ...columnIdsGroupByLocked.value.false];
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
    return {
      shouldFixColumns,
      modelColumnsOrderingLocal,
    };
  };

  const checkColumnsOrderingWithEmit = () => {
    const {
      shouldFixColumns,
      modelColumnsOrderingLocal,
    } = checkColumnsOrdering();

    if (shouldFixColumns) {
      emit("changeColumnsOrdering", {
        modelColumnsOrdering: modelColumnsOrderingLocal,
        shouldFixColumns,
      });
    }
  };

  watch(columns, () => {
    checkColumnsOrderingWithEmit();
  }, {
    deep: true,
  });

  return {
    changeColumnsOrdering,
    checkColumnsOrdering,
  };
}
