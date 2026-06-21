import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props) {
  const column = toRef(props, "column");
  const isEditable = toRef(props, "isEditable");
  const isEditMode = toRef(props, "isEditMode");

  const disabledLocal = computed(() => {
    return !!column.value?.formElement?.disabled ||
      (isEditable.value &&
        !isEditMode.value);
  });

  return {
    disabledLocal,
  };
}
