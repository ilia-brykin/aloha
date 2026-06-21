import {
  computed,
  toRef,
} from "vue";

export default function ReadonlyAPI(props) {
  const column = toRef(props, "column");
  const isFooter = toRef(props, "isFooter");
  const isEditable = toRef(props, "isEditable");

  const readonlyLocal = computed(() => {
    if (isFooter.value) {
      return true;
    }
    if (isEditable.value) {
      return !!column.value?.formElement?.readonly;
    }
    return true;
  });

  return {
    readonlyLocal,
  };
}
