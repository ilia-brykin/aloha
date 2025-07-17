import {
  computed,
  nextTick,
  toRef,
} from "vue";
import {
  AConfirmAPI,
  AKeyId,
  setFocusToElement,
} from "../../../../index";

export default function DeleteAPI(props, { emit }) {
  const elementLabel = toRef(props, "elementLabel");
  const mode = toRef(props, "mode");
  const modelIndex = toRef(props, "modelIndex");
  const modelItem = toRef(props, "modelItem");
  const parentHtmlId = toRef(props, "parentHtmlId");

  const {
    closeConfirm,
    openConfirm,
  } = AConfirmAPI();

  const btnDeleteId = computed(() => {
    return `${ parentHtmlId.value }_btn_delete_${ modelIndex.value }`;
  });

  const onDelete = () => {
    if (mode.value === "list") {
      emit("delete", { index: modelIndex.value });
    } else {
      emit("delete", { key: modelItem.value[AKeyId] });
    }

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
