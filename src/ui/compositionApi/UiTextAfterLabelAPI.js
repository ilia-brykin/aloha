import {
  computed,
  toRef,
} from "vue";

export default function UiTextAfterLabelAPI(props) {
  const required = toRef(props, "required");

  const textAfterLabel = computed(() => {
    return required.value ? "*" : "";
  });

  return {
    textAfterLabel,
  };
}
