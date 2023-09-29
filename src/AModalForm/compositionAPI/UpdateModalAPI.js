export default function UpdateModalAPI({ emit }) {
  const updateModelLocal = model => {
    emit("update:modelValue", model);
  };

  return {
    updateModelLocal,
  };
}
