import {
  computed,
  toRef,
} from "vue";

export default function ConfirmAPI(props, {
  applyInput = () => true,
  changeModel = () => {},
  closePopover = () => {},
  valueLocal = computed(() => ""),
}) {
  const modelUndefined = toRef(props, "modelUndefined");

  const confirmColor = () => {
    if (!applyInput()) {
      return;
    }
    changeModel({
      model: valueLocal.value,
    });
    closePopover({ isFocusToggle: true });
  };

  const clearColor = () => {
    changeModel({
      model: modelUndefined.value,
      triggerDetails: "clear",
    });
    closePopover({ isFocusToggle: true });
  };

  return {
    clearColor,
    confirmColor,
  };
}
