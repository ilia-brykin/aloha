import {
  computed,
  nextTick,
  toRef,
} from "vue";
import {
  AConfirmAPI,
  setFocusToElement,
} from "../../../../index";

export default function DeleteAPI(props, { emit }) {
  const elementLabel = toRef(props, "elementLabel");
  const modelIndex = toRef(props, "modelIndex");
  const parentId = toRef(props, "parentId");

  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  const btnDeleteId = computed(() => {
    return `${ parentId.value }_btn_delete_${ modelIndex.value }`;
  });

  const onDelete = () => {
    emit("delete", { index: modelIndex.value });
    closeConfirm();
  };

  const openDeleteConfirm = () => {
    openConfirm({
      headerText: "_A_VALIDATED_JSON_CONFIRM_DELETE_HEADER_{{elementLabel}}_",
      bodyHtml: "_A_VALIDATED_JSON_CONFIRM_DELETE_BODY_",
      extra: {
        elementLabel: elementLabel.value,
      },
      saveButtonText: "_A_VALIDATED_JSON_CONFIRM_DELETE_BTN_",
      save: onDelete,
      close: () => {
        nextTick().then(
          () => {
            setFocusToElement({
              selector: `#${ btnDeleteId.value }`,
            });
          },
        );
      },
    });
  };

  return {
    btnDeleteId,
    openDeleteConfirm,
  };
}
