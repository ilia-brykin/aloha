import {
  toRef,
} from "vue";

export default function EscapeAPI(props) {
  const close = toRef(props, "close");
  const useEscape = toRef(props, "useEscape");

  const pressEscape = () => {
    if (!useEscape.value) {
      return;
    }
    close.value();
  };

  return {
    pressEscape,
  };
}
