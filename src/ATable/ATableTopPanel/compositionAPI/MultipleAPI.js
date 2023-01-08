import {
  computed,
  toRef,
} from "vue";

export default function MultipleAPI(props, { emit }) {
  const selectedRows = toRef(props, "selectedRows");
  const countAllRows = toRef(props, "countAllRows");
  const areSomeRowsSelected = toRef(props, "areSomeRowsSelected");
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");

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

  const toggleBtnAllRows = () => {
    emit("toggleBtnAllRows");
  };

  const isBtnMultipleActionDisabled = computed(() => {
    return !areSomeRowsSelected.value && !areAllRowsSelected.value;
  });

  return {
    isBtnMultipleActionDisabled,
    textMultipleSelectedTranslateExtra,
    textMultipleBtnAllRowsTranslate,
    toggleBtnAllRows,
  };
}
