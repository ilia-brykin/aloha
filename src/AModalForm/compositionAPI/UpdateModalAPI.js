export default function UpdateModalAPI({ emit }) {
  const updateModelLocal = model => {
    emit("update:modelValue", model);
  };

  const changeLocal = arg => {
    emit("change", arg);
  };

  return {
    changeLocal,
    updateModelLocal,
  };
}
