import {
  toRef,
} from "vue";

export default function KeyboardAPI(props, {
  charsLocal,
  clearChar = () => {},
  focusInput = () => {},
}) {
  const length = toRef(props, "length");

  const isRtl = $event => {
    return getComputedStyle($event.target).direction === "rtl";
  };

  const onKeydown = ({ $event, index }) => {
    const LAST = length.value - 1;
    const STEP = isRtl($event) ? -1 : 1;
    switch ($event.key) {
      case "Backspace":
        $event.preventDefault();
        if (charsLocal.value[index]) {
          clearChar({ index });
        } else if (index > 0) {
          clearChar({ index: index - 1 });
          focusInput({ index: index - 1 });
        }
        break;
      case "Delete":
        $event.preventDefault();
        clearChar({ index });
        break;
      case "ArrowLeft":
        $event.preventDefault();
        focusInput({ index: Math.min(Math.max(index - STEP, 0), LAST) });
        break;
      case "ArrowRight":
        $event.preventDefault();
        focusInput({ index: Math.min(Math.max(index + STEP, 0), LAST) });
        break;
      case "Home":
        $event.preventDefault();
        focusInput({ index: 0 });
        break;
      case "End":
        $event.preventDefault();
        focusInput({ index: LAST });
        break;
      default:
        break;
    }
  };

  return {
    onKeydown,
  };
}
