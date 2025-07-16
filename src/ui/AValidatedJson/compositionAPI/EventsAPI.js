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

  return {
    blur,
    focus,
    open,
  };
}
