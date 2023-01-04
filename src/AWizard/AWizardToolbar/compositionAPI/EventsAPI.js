export default function EventsAPI(props, { emit }) {
  const goOneStepBack = () => {
    emit("goOneStepBack");
  };

  const goOneStepForward = () => {
    emit("goOneStepForward");
  };

  return {
    goOneStepBack,
    goOneStepForward,
  };
}
