export default function EmitsAPI({ emit }) {
  const goStepBackLocal = arg => {
    emit("goStepBack", arg);
  };
  const goStepForwardLocal = arg => {
    emit("goStepForward", arg);
  };

  return {
    goStepBackLocal,
    goStepForwardLocal,
  };
}
