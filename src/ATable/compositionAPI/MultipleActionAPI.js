import {
  computed,
  ref,
} from "vue";

import {
  filter,
  get,
  isFunction,
  size,
  times,
} from "lodash-es";

export default function MultipleActionAPI({
  rowsLocal = computed(() => []),
  rowsLocalLength = computed(() => 0),
}) {
  const isMultipleActionsActive = ref(undefined);
  const currentMultipleActions = ref(undefined);
  const selectedRowsIndexes = ref({});

  const hasCurrentMultipleActionsIsHiddenCallback = computed(() => {
    return isFunction(get(currentMultipleActions.value, "isHiddenCallback"));
  });

  const selectedRows = computed(() => {
    return filter(rowsLocal.value, (row, index) => {
      return selectedRowsIndexes.value[index];
    });
  });

  const setEmptySelectedRowsIndexes = () => {
    selectedRowsIndexes.value = {};
  };

  const closeMultipleActionsActive = () => {
    isMultipleActionsActive.value = false;
    currentMultipleActions.value = undefined;
    setEmptySelectedRowsIndexes();
  };

  const toggleMultipleActionsActive = ({ isActive, action } = {}) => {
    if (isActive) {
      isMultipleActionsActive.value = true;
      currentMultipleActions.value = action;
      return;
    }

    if (isMultipleActionsActive.value) {
      closeMultipleActionsActive();
    } else {
      isMultipleActionsActive.value = true;
    }
  };

  const selectedRowsIndexesLength = computed(() => {
    return size(selectedRowsIndexes.value);
  });

  const areAllRowsSelected = computed(() => {
    return rowsLocalLength.value === selectedRowsIndexesLength.value;
  });

  const areSomeRowsSelected = computed(() => {
    return selectedRowsIndexesLength.value > 0;
  });

  const setSelectedRowsIndexes = ({ rowIndex, isAll }) => {
    if (isAll) {
      if (areSomeRowsSelected.value) {
        setEmptySelectedRowsIndexes();
      } else {
        const SELECTED_ROWS_INDEXES = {};
        if (hasCurrentMultipleActionsIsHiddenCallback.value) {
          times(rowsLocalLength.value, index => {
            if (!currentMultipleActions.value.isHiddenCallback({
              row: rowsLocal.value[index],
              rowIndex: index,
            })) {
              SELECTED_ROWS_INDEXES[index] = true;
            }
          });
        } else {
          times(rowsLocalLength.value, index => {
            SELECTED_ROWS_INDEXES[index] = true;
          });
        }
        selectedRowsIndexes.value = SELECTED_ROWS_INDEXES;
      }
      return;
    }
    if (selectedRowsIndexes.value[rowIndex]) {
      delete selectedRowsIndexes.value[rowIndex];
    } else {
      selectedRowsIndexes.value[rowIndex] = true;
    }
  };

  return {
    areAllRowsSelected,
    areSomeRowsSelected,
    closeMultipleActionsActive,
    currentMultipleActions,
    isMultipleActionsActive,
    selectedRows,
    selectedRowsIndexes,
    setEmptySelectedRowsIndexes,
    setSelectedRowsIndexes,
    toggleMultipleActionsActive,
  };
}
