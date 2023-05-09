import {
  computed,
  inject,
  toRef,
} from "vue";

import AConfirmAPI from "../../../compositionAPI/AConfirmAPI";

import {
  cloneDeep,
  forEach,
  isFunction,
} from "lodash-es";

export default function ActionsAPI(props, { emit }) {
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");
  const closeMultipleActionsActive = toRef(props, "closeMultipleActionsActive");
  const modelFilters = toRef(props, "modelFilters");
  const multipleActions = toRef(props, "multipleActions");
  const selectedRows = toRef(props, "selectedRows");
  const tableActions = toRef(props, "tableActions");

  const tableId = inject("tableId");
  const currentMultipleActions = inject("currentMultipleActions");
  const rowsLocalAll = inject("rowsLocalAll");

  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  const buttonMultipleId = computed(() => {
    return `${ tableId.value }_btn_multiple`;
  });

  const tableActionsFiltered = computed(() => {
    const TABLE_ACTIONS = [];
    forEach(cloneDeep(tableActions.value), action => {
      if (action.isHidden) {
        return;
      }
      if (isFunction(action.callback)) {
        const CALLBACK_DEFAULT = action.callback;
        action.callback = () => CALLBACK_DEFAULT({
          id: action.id,
          action,
        });
      }
      TABLE_ACTIONS.push(action);
    });

    return TABLE_ACTIONS;
  });

  const onClickMultipleActions = ({ action, callbackDefault }) => {
    const ACTION = cloneDeep(action);
    ACTION.callback = callbackDefault;
    emit("toggleMultipleActionsActive", { isActive: true, action: ACTION });
  };

  const onCancelMultipleActions = () => {
    emit("toggleMultipleActionsActive");
  };

  const multipleActionsFiltered = computed(() => {
    const ACTIONS = cloneDeep(multipleActions.value);
    forEach(ACTIONS, action => {
      if (isFunction(action.callback)) {
        const CALLBACK_DEFAULT = action.callback;
        action.callback = () => onClickMultipleActions({ action, callbackDefault: CALLBACK_DEFAULT });
      }
    });
    return ACTIONS;
  });

  const onStartModalMultipleActions = async() => {
    await currentMultipleActions.value.callback({
      rows: selectedRows.value,
      rowsVisible: rowsLocalAll.value,
      id: buttonMultipleId.value,
      areAllRowsSelected: areAllRowsSelected.value,
      modelFilters: modelFilters.value,
      action: currentMultipleActions.value,
    });
    closeConfirm();
    onCancelMultipleActions();
  };

  const onOpenModalMultipleActions = () => {
    if (currentMultipleActions.value.isConfirm) {
      openConfirm({
        headerText: "_EXECUTE_MULTIPLE_ACTION_",
        bodyHtml: `<div>Möchten Sie die Aktion <strong>${ currentMultipleActions.value.label }</strong> auf <strong>${ selectedRows.value.length }</strong> Objekten durchführen?</div>`,
        save: onStartModalMultipleActions,
      });
    } else {
      currentMultipleActions.value.callback({
        close: closeMultipleActionsActive.value,
        rows: selectedRows.value,
        rowsVisible: rowsLocalAll.value,
        id: buttonMultipleId.value,
        areAllRowsSelected: areAllRowsSelected.value,
        modelFilters: modelFilters.value,
        action: currentMultipleActions.value,
      });
    }
  };

  return {
    buttonMultipleId,
    currentMultipleActions,
    multipleActionsFiltered,
    onCancelMultipleActions,
    onOpenModalMultipleActions,
    tableActionsFiltered,
  };
}
