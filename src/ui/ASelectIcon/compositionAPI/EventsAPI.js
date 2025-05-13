export default function EventsAPI({ emit }) {
  const blur = arg => {
    emit("blur", arg);
  };

  const focus = arg => {
    emit("focus", arg);
  };

  const open = arg => {
    emit("open", arg);
  };

  const updateModelValue = arg => {
    emit("update:modelValue", arg);
  };

  return {
    blur,
    focus,
    open,
    updateModelValue,
  };
}
