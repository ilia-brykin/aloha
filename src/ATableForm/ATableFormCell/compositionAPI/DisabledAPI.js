import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props, {
  formElement,
} = {}) {
  const column = toRef(props, "column");
  const isEditable = toRef(props, "isEditable");
  const isEditMode = toRef(props, "isEditMode");
  const formElementLocal = formElement || computed(() => column.value?.formElement);

  const disabledLocal = computed(() => {
    return !!formElementLocal.value?.disabled ||
      (isEditable.value &&
        !isEditMode.value);
  });

  return {
    disabledLocal,
  };
}
