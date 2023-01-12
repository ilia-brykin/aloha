export default function ViewsAPI(props, { emit }) {
  const updateViewCurrentLocal = model => {
    emit("updateViewCurrent", model);
  };

  return {
    updateViewCurrentLocal,
  };
}
