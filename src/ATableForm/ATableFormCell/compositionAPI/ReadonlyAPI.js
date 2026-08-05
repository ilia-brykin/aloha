import {
  computed,
  toRef,
} from "vue";

export default function ReadonlyAPI(props, {
  formElement,
} = {}) {
  const column = toRef(props, "column");
  const isEditable = toRef(props, "isEditable");
  const isEditMode = toRef(props, "isEditMode");
  const isFooter = toRef(props, "isFooter");
  const formElementLocal = formElement || computed(() => column.value?.formElement);

  const readonlyLocal = computed(() => {
    if (isFooter.value) {
      return true;
    }
    if (isEditable.value) {
      if (formElementLocal.value?.useRowReadonly) {
        return !isEditMode.value;
      }
      return !!formElementLocal.value?.readonly;
    }
    return true;
  });

  return {
    readonlyLocal,
  };
}
