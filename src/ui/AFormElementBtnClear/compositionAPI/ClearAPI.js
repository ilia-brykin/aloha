export default function ClearAPI({ emit }) {
  const clearLocal = ({ $event }) => {
    $event.stopPropagation();
    $event.preventDefault();
    emit("clear", $event);
  };

  return {
    clearLocal,
  };
}
