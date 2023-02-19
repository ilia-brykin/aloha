import {
  computed,
  inject,
  toRef,
} from "vue";

import AConfirmAPI from "../../../compositionAPI/AConfirmAPI";

import {
  cloneDeep,
  filter,
  forEach,
  last,
} from "lodash-es";

export default function ActionsAPI(props, { emit }) {
  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  const tableActions = toRef(props, "tableActions");
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");
  const modelFilters = toRef(props, "modelFilters");

  const tableId = inject("tableId");
  const currentMultipleActions = inject("currentMultipleActions");
  const buttonMultipleId = computed(() => {
    return `${ tableId.value }_btn_multiple`;
  });

  const tableActionsFiltered = computed(() => {
    const TABLE_ACTIONS = [];
    forEach(cloneDeep(tableActions.value), action => {
      if (action.isHidden) {
        return;
      }
      if (action.type === "button") {
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

  const multipleActions = toRef(props, "multipleActions");
  const multipleActionsFiltered = computed(() => {
    const ACTIONS_FILTERED = filter(multipleActions.value, action => {
      return !action.isHidden;
    });

    const ACTIONS_DIVIDER_FILTERED = [];
    forEach(ACTIONS_FILTERED, action => {
      if (!action.isDivider ||
            (ACTIONS_DIVIDER_FILTERED.length > 0 &&
              !last(ACTIONS_DIVIDER_FILTERED).isDivider)) {
        ACTIONS_DIVIDER_FILTERED.push(action);
      }
    });
    const LAST_ACTION = last(ACTIONS_DIVIDER_FILTERED);
    if (LAST_ACTION && LAST_ACTION.isDivider) {
      ACTIONS_DIVIDER_FILTERED.pop();
    }

    return ACTIONS_DIVIDER_FILTERED;
  });

  const isMultipleActionsFiltered = computed(() => {
    return multipleActionsFiltered.value.length > 0;
  });

  const onClickMultipleActions = ({ action }) => {
    emit("toggleMultipleActionsActive", { isActive: true, action });
  };

  const onCancelMultipleActions = () => {
    emit("toggleMultipleActionsActive");
  };

  const closeMultipleActionsActive = toRef(props, "closeMultipleActionsActive");
  const selectedRows = toRef(props, "selectedRows");

  const onStartModalMultipleActions = async() => {
    await currentMultipleActions.value.callback({
      rows: selectedRows.value,
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
        headerText: "Mehrfachaktion durchführen?",
        bodyHtml: `<div>Möchten Sie die Aktion <strong>${ currentMultipleActions.value.label }</strong> auf <strong>${ selectedRows.value.length }</strong> Objekten durchführen?</div>`,
        save: onStartModalMultipleActions,
      });
    } else {
      currentMultipleActions.value.callback({
        close: closeMultipleActionsActive.value,
        rows: selectedRows.value,
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
    isMultipleActionsFiltered,
    multipleActionsFiltered,
    onCancelMultipleActions,
    onClickMultipleActions,
    onOpenModalMultipleActions,
    tableActionsFiltered,
  };
}
