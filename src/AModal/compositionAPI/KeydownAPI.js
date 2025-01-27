import AKeysCode from "../../const/AKeysCode";

export default function KeydownAPI({
  pressEscape = () => {
  },
  trapFocus = () => {
  },
}) {
  const keydown = $event => {
    const EVENT = $event || window.$event;
    if (EVENT.key === "Escape" || EVENT.keyCode === AKeysCode.escape) {
      pressEscape($event);
    } else if (EVENT.key === "Tab" || EVENT.keyCode === AKeysCode.tab) {
      trapFocus(EVENT);
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
