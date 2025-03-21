import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  getMultiplePanelId,
} from "../../utils/utils";

import AFiltersAPI from "../../../compositionAPI/AFiltersAPI";

export default function MultipleAPI(props, { emit }) {
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");
  const areSomeRowsSelected = toRef(props, "areSomeRowsSelected");
  const countAllRows = toRef(props, "countAllRows");
  const isLoadingMultipleActions = toRef(props, "isLoadingMultipleActions");
  const selectedRows = toRef(props, "selectedRows");

  const tableId = inject("tableId");

  const {
    filterFloat,
  } = AFiltersAPI();

  const multiplePanelId = computed(() => {
    return getMultiplePanelId({ tableId: tableId.value });
  });

  const countSelectedRows = computed(() => {
    return areAllRowsSelected.value ?
      countAllRows.value :
      selectedRows.value.length;
  });

  const textMultipleSelectedTranslateExtra = computed(() => {
    return {
      countSelectedRows: countSelectedRows.value,
      countSelectedRowsFiltered: filterFloat(countSelectedRows.value, { digits: 0 }),
      countAllRows: countAllRows.value,
      countAllRowsFiltered: filterFloat(countAllRows.value, { digits: 0 }),
    };
  });

  const textMultipleBtnAllRowsTranslate = computed(() => {
    return areAllRowsSelected.value ?
      "_A_TABLE_DESELECT_ALL_ROWS_{{countAllRows}}_{{countAllRowsFiltered}}_" :
      "_A_TABLE_SELECT_ALL_ROWS_{{countAllRows}}_{{countAllRowsFiltered}}_";
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
    multiplePanelId,
    textMultipleBtnAllRowsTranslate,
    textMultipleSelectedTranslateExtra,
    toggleBtnAllRows,
  };
}
