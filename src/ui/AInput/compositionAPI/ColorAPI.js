import {
  computed,
  toRef,
} from "vue";

export default function ColorAPI(props) {
  const modelValue = toRef(props, "modelValue");
  const type = toRef(props, "type");

  const modelValueLocal = computed(() => {
    if (type.value === "color" && !modelValue.value) {
      return "#000000";
    }

    return modelValue.value;
  });

  return {
    modelValueLocal,
  };
}
