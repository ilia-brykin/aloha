import {
  computed,
  toRef,
} from "vue";

export default function UiLabelFloatAPI(props) {
  const options = toRef(props, "options");
  const isLabelFloat = toRef(props, "isLabelFloat");
  const isLabelFloatLocal = computed(() => {
    return "isLabelFloat" in options.value ?
      options.value.isLabelFloat :
      isLabelFloat.value;
  });

  return {
    isLabelFloatLocal,
  };
}
