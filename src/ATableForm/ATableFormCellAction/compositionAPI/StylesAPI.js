import {
  computed,
  toRef,
} from "vue";

export default function StylesAPI(props) {
  const isDeletable = toRef(props, "isDeletable");
  const isDeletableConfirm = toRef(props, "isDeletableConfirm");
  const isEditable = toRef(props, "isEditable");
  const isActiveEditMode = toRef(props, "isActiveEditMode");
  const widths = toRef(props, "widths");

  const columnStyles = computed(() => {
    const hasDeleteAction = isDeletable.value || isDeletableConfirm.value;
    const width = isEditable.value || (isActiveEditMode.value && hasDeleteAction) ?
      widths.value.actionsColumnDouble :
      widths.value.actionsColumnSingle;

    return {
      maxWidth: `${ width }px`,
      minWidth: `${ width }px`,
      width: `${ width }px`,
    };
  });

  return {
    columnStyles,
  };
}
