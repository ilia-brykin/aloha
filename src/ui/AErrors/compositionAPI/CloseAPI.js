export default function CloseAPI({ emit }) {
  const close = () => {
    emit("close");
  };

  return {
    close,
  };
}
