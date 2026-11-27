import {
  isTopModal,
} from "./ModalStackAPI";

export default function KeydownAPI({
  modalKey,
  pressEscape = () => {},
  trapFocus = () => {},
}) {
  // only the top modal: Escape in a nested modal closes only it
  const keydown = $event => {
    if (!isTopModal(modalKey)) {
      return;
    }
    if ($event.key === "Escape") {
      pressEscape($event);
    } else if ($event.key === "Tab") {
      trapFocus($event);
    }
  };

  const setListenerForKeydown = () => {
    document.addEventListener("keydown", keydown);
  };

  const removeListenerForKeydown = () => {
    document.removeEventListener("keydown", keydown);
  };

  return {
    setListenerForKeydown,
    removeListenerForKeydown,
  };
}
