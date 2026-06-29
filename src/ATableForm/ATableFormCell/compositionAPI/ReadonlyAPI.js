import {
  computed,
  toRef,
} from "vue";

export default function ReadonlyAPI(props) {
  const column = toRef(props, "column");
  const isEditable = toRef(props, "isEditable");
  const isEditMode = toRef(props, "isEditMode");
  const isFooter = toRef(props, "isFooter");

  const readonlyLocal = computed(() => {
    if (isFooter.value) {
      return true;
    }
    if (isEditable.value) {
      if (column.value?.formElement?.useRowReadonly) {
        return !isEditMode.value;
      }
      return !!column.value?.formElement?.readonly;
    }
    return true;
  });

  return {
    readonlyLocal,
  };
}
