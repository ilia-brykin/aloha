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
} from "lodash-es";

export default function ActionsAPI(props, { emit }) {
  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  const tableActions = toRef(props, "tableActions");
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");

  const tableId = inject("tableId");
  const currentMultipleActions = inject("currentMultipleActions");
  const buttonMultipleId = computed(() => {
    return `${ tableId.value }_btn_multiple`;
  });

  const tableActionFiltered = computed(() => {
    const TABLE_ACTIONS = [];
    forEach(cloneDeep(tableActions.value), action => {
      if (action.isHidden) {
        return;
      }
      if (action.type === "dropdown") {
        if (!action.children || !action.children.length) {
          return;
        }
        const CHILDREN = filter(action.children, item => !item.isHidden);
        if (!CHILDREN.length) {
          return;
        }
        action.children = CHILDREN;
      }
      TABLE_ACTIONS.push(action);
    });

    return TABLE_ACTIONS;
  });

  const multipleActions = toRef(props, "multipleActions");
  const multipleActionsFiltered = computed(() => {
    return filter(multipleActions.value, action => {
      return !action.isHidden;
    });
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
    tableActionFiltered,
  };
}
