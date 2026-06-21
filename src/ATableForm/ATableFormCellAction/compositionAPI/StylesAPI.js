import {
  computed,
  toRef,
} from "vue";

const SINGLE_ACTION_WIDTH = 56;
const DOUBLE_ACTION_WIDTH = 112;

export default function StylesAPI(props) {
  const isDeletable = toRef(props, "isDeletable");
  const isDeletableConfirm = toRef(props, "isDeletableConfirm");
  const isEditable = toRef(props, "isEditable");
  const isActiveEditMode = toRef(props, "isActiveEditMode");

  const columnStyles = computed(() => {
    const hasDeleteAction = isDeletable.value || isDeletableConfirm.value;
    const width = isEditable.value || (isActiveEditMode.value && hasDeleteAction) ?
      DOUBLE_ACTION_WIDTH :
      SINGLE_ACTION_WIDTH;

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
