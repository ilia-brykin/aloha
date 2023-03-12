import {
  computed,
  toRef,
} from "vue";

export default function MultipleAPI(props, { emit }) {
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");
  const areSomeRowsSelected = toRef(props, "areSomeRowsSelected");
  const countAllRows = toRef(props, "countAllRows");
  const isLoadingMultipleActions = toRef(props, "isLoadingMultipleActions");
  const selectedRows = toRef(props, "selectedRows");

  const countSelectedRows = computed(() => {
    return areAllRowsSelected.value ?
      countAllRows.value :
      selectedRows.value.length;
  });

  const textMultipleSelectedTranslateExtra = computed(() => {
    return {
      countSelectedRows: countSelectedRows.value,
      countAllRows: countAllRows.value,
    };
  });

  const textMultipleBtnAllRowsTranslate = computed(() => {
    return areAllRowsSelected.value ?
      "_TABLE_DESELECT_ALL_ROWS_{{countAllRows}}_" :
      "_TABLE_SELECT_ALL_ROWS_{{countAllRows}}_";
  });

  const isBtnSelectAllRowsDisabled = computed(() => {
    return !!(isLoadingMultipleActions.value ||
      countAllRows.value === 0);
  });

  const toggleBtnAllRows = () => {
    if (isBtnSelectAllRowsDisabled.value) {
      return;
    }
    emit("toggleBtnAllRows");
  };

  const isBtnMultipleActionDisabled = computed(() => {
    return !areSomeRowsSelected.value && !areAllRowsSelected.value;
  });

  return {
    isBtnMultipleActionDisabled,
    isBtnSelectAllRowsDisabled,
    textMultipleBtnAllRowsTranslate,
    textMultipleSelectedTranslateExtra,
    toggleBtnAllRows,
  };
}
