import {
  computed,
  nextTick,
  toRef,
} from "vue";
import {
  AConfirmAPI,
  setFocusToElement,
} from "../../../index";

export default function DeleteAPI(props, {
  idBtnDelete = computed(() => ""),
  isActionsDisabled = computed(() => false),
}) {
  const id = toRef(props, "id");
  const isDeletable = toRef(props, "isDeletable");
  const isDeletableConfirm = toRef(props, "isDeletableConfirm");
  const onDeleteRow = toRef(props, "onDeleteRow");
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");
  const texts = toRef(props, "texts");

  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  const closeConfirmLocal = () => {
    closeConfirm();
    nextTick().then(
      () => {
        setFocusToElement({ selector: `#${ idBtnDelete.value }` });
      },
    );
  };

  const openDeleteConfirm = () => {
    openConfirm({
      bodyHtml: texts.value.actionDeleteConfirmBody,
      closeButtonText: texts.value.actionDeleteConfirmClose,
      headerText: texts.value.actionDeleteConfirmHeader,
      save: async() => {
        await onDeleteRow.value({
          btnDeleteId: idBtnDelete.value,
          row: row.value,
          rowIndex: rowIndex.value,
          rowId: id.value,
        });
        closeConfirm();
      },
      close: closeConfirmLocal,
      saveButtonText: texts.value.actionDeleteConfirmSave,
    });
  };

  const onDeleteClick = () => {
    if (isActionsDisabled.value) {
      return;
    }

    if (isDeletableConfirm.value) {
      openDeleteConfirm();

      return;
    }

    if (isDeletable.value) {
      onDeleteRow.value({
        btnDeleteId: idBtnDelete.value,
        row: row.value,
        rowIndex: rowIndex.value,
        rowId: id.value,
      });
    }
  };

  return {
    onDeleteClick,
  };
}
