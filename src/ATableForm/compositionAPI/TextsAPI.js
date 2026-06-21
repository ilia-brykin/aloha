import {
  computed,
  toRef,
} from "vue";

export default function TextsAPI(props) {
  const texts = toRef(props, "texts");

  const textsLocal = computed(() => {
    return {
      actionsColumn: "_A_TABLE_FORM_ACTIONS_",
      actionAddRow: "_A_TABLE_FORM_ADD_ROW_",
      actionDelete: "_A_TABLE_FORM_DELETE_",
      actionDeleteConfirmBody: "_A_TABLE_FORM_DELETE_CONFIRM_BODY_",
      actionDeleteConfirmClose: "_A_TABLE_FORM_DELETE_CONFIRM_CLOSE_",
      actionDeleteConfirmHeader: "_A_TABLE_FORM_DELETE_CONFIRM_HEADER_",
      actionDeleteConfirmSave: "_A_TABLE_FORM_DELETE_CONFIRM_SAVE_",
      actionEdit: "_A_TABLE_FORM_EDIT_",
      actionEditCancel: "_A_TABLE_FORM_EDIT_CANCEL_",
      actionEditSave: "_A_TABLE_FORM_EDIT_SAVE_",
      editInfoText: undefined,
      emptyText: "_A_TABLE_FORM_EMPTY_",
      reorderColumn: "_A_TABLE_FORM_REORDER_COLUMN_",
      reorderDown: "_A_TABLE_FORM_MOVE_DOWN_",
      reorderHandle: "_A_TABLE_FORM_REORDER_",
      reorderUp: "_A_TABLE_FORM_MOVE_UP_",
      ...texts.value,
    };
  });

  return {
    textsLocal,
  };
}
