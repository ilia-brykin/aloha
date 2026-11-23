import {
  ref,
  toRef,
} from "vue";

export default function ClearAPI(props, {
  changeModel = () => {},
  toggleRef = ref(undefined),
}) {
  const modelUndefined = toRef(props, "modelUndefined");

  const clearModelFromToggle = () => {
    changeModel({
      model: modelUndefined.value,
      triggerDetails: "clear",
    });
    toggleRef.value?.focus();
  };

  return {
    clearModelFromToggle,
  };
}
