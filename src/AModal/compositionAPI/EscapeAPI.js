import {
  toRef,
} from "vue";

import APopupAPI from "../../compositionAPI/APopupAPI";

export default function EscapeAPI(props) {
  const close = toRef(props, "close");
  const useEscape = toRef(props, "useEscape");

  const {
    isOnePopupOpen,
  } = APopupAPI();

  const pressEscape = $event => {
    if (!useEscape.value || isOnePopupOpen.value) {
      return;
    }
    close.value();
    $event.preventDefault();
    $event.stopPropagation();
  };

  return {
    pressEscape,
  };
}
