export default function EmitsAPI({ emit }, {
  scrollToTop = () => {},
} = {}) {
  const changeStepLocal = arg => {
    scrollToTop();
    emit("changeStep", arg);
  };

  const goStepBackLocal = arg => {
    emit("goStepBack", arg);
  };
  const goStepForwardLocal = arg => {
    emit("goStepForward", arg);
  };

  return {
    changeStepLocal,
    goStepBackLocal,
    goStepForwardLocal,
  };
}
