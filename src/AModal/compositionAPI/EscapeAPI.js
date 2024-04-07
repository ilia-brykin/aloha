import {
  toRef,
} from "vue";

export default function EscapeAPI(props) {
  const close = toRef(props, "close");
  const useEscape = toRef(props, "useEscape");

  const pressEscape = $event => {
    if (!useEscape.value) {
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
