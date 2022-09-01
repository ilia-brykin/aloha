import {
  computed,
  ref,
} from "vue";

import {
  filter,
  size,
  times,
} from "lodash-es";

export default function MultipleActionAPI({
  rowsLocal = computed(() => []),
  rowsLocalLength = computed(() => 0),
}) {
  const isMultipleActionsActive = ref(undefined);
  const selectedRowsIndexes = ref({});
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
    setEmptySelectedRowsIndexes();
  };

  const toggleMultipleActionsActive = () => {
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
        times(rowsLocalLength.value, index => {
          SELECTED_ROWS_INDEXES[index] = true;
        });
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
    isMultipleActionsActive,
    selectedRows,
    selectedRowsIndexes,
    setEmptySelectedRowsIndexes,
    setSelectedRowsIndexes,
    toggleMultipleActionsActive,
  };
}
