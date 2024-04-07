import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";
import {
  getMultiplePanelId,
} from "../utils/utils";
import {
  filter,
  get,
  isFunction,
  size,
  times,
} from "lodash-es";

export default function MultipleActionAPI(props, { emit }, {
  checkVisibleColumns = () => {},
  isMultipleActionsActive = ref(undefined),
  rowsLocalAll = computed(() => []),
  rowsLocalLength = computed(() => 0),
}) {
  const id = toRef(props, "id");
  const multipleActions = toRef(props, "multipleActions");

  const currentMultipleActions = ref(undefined);
  const selectedRowsIndexes = ref({});
  const areAllRowsSelected = ref(false);

  const hasMultipleActions = computed(() => {
    return multipleActions.value.length > 0;
  });

  const hasCurrentMultipleActionsIsHiddenCallback = computed(() => {
    return isFunction(get(currentMultipleActions.value, "isHiddenCallback"));
  });

  const selectedRows = computed(() => {
    return filter(rowsLocalAll.value, (row, index) => {
      return selectedRowsIndexes.value[index];
    });
  });

  const setEmptySelectedRowsIndexes = () => {
    selectedRowsIndexes.value = {};
  };

  const closeMultipleActionsActive = () => {
    isMultipleActionsActive.value = false;
    currentMultipleActions.value = undefined;
    areAllRowsSelected.value = false;
    setEmptySelectedRowsIndexes();
  };

  const setFocusToMultiplePanel = () => {
    const PANEL_ID = getMultiplePanelId({ tableId: id.value });
    setFocusToElement({
      selector: `#${ PANEL_ID }`,
    });
  };

  const toggleMultipleActionsActive = ({ isActive, action } = {}) => {
    if (isActive) {
      isMultipleActionsActive.value = true;
      currentMultipleActions.value = action;
      setTimeout(() => {
        checkVisibleColumns();
        setFocusToMultiplePanel();
      });
      emit("toggleMultipleActions", ({ isActive, action }));
      return;
    }

    if (isMultipleActionsActive.value) {
      closeMultipleActionsActive();
    } else {
      isMultipleActionsActive.value = true;
    }
    setTimeout(() => {
      checkVisibleColumns();
      setFocusToMultiplePanel();
    });
    emit("toggleMultipleActions", ({ isActive, action }));
  };

  const selectedRowsIndexesLength = computed(() => {
    return size(selectedRowsIndexes.value);
  });

  const areAllVisibleRowsSelected = computed(() => {
    return rowsLocalLength.value > 0 && 
      rowsLocalLength.value === selectedRowsIndexesLength.value;
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
              row: rowsLocalAll.value[index],
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

  const toggleBtnAllRows = () => {
    areAllRowsSelected.value = !areAllRowsSelected.value;
    if (areAllRowsSelected.value) {
      setEmptySelectedRowsIndexes();
    }
  };

  return {
    areAllRowsSelected,
    areAllVisibleRowsSelected,
    areSomeRowsSelected,
    closeMultipleActionsActive,
    currentMultipleActions,
    hasMultipleActions,
    selectedRows,
    selectedRowsIndexes,
    setEmptySelectedRowsIndexes,
    setSelectedRowsIndexes,
    toggleBtnAllRows,
    toggleMultipleActionsActive,
  };
}
