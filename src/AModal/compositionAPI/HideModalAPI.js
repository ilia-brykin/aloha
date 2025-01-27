export default function HideModalAPI({
  removeListenerForKeydown = () => {
  },
  setFocusByDestroy = () => {
  },
}) {
  const hideModal = () => {
    document.body.classList.remove("a_modal_open");
    setFocusByDestroy();
    removeListenerForKeydown();
  };

  return {
    hideModal,
  };
}
