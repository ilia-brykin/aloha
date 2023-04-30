export default function DismissAPI({ emit }) {
  const onDismiss = () => {
    emit("onDismiss");
  };

  return {
    onDismiss,
  };
}
