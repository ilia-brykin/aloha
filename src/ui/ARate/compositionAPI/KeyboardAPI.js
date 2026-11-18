import {
  computed,
  ref,
} from "vue";

export default function KeyboardAPI(props, {
  clear = () => {},
  hoverValue = ref(undefined),
  maxLocal = computed(() => 5),
  setValue = () => {},
  step = computed(() => 1),
  valueLocal = computed(() => 0),
  valueMin = computed(() => 1),
}) {
  const onKeydown = $event => {
    if (props.disabled) {
      return;
    }
    // The keyboard shows the real value, not the value under the mouse pointer
    hoverValue.value = undefined;
    const IS_RTL = getComputedStyle($event.currentTarget).direction === "rtl";
    const DIRECTION = IS_RTL ? -1 : 1;
    let value;
    switch ($event.key) {
      case "ArrowRight":
        value = valueLocal.value + step.value * DIRECTION;
        break;
      case "ArrowUp":
        value = valueLocal.value + step.value;
        break;
      case "ArrowLeft":
        value = valueLocal.value - step.value * DIRECTION;
        break;
      case "ArrowDown":
        value = valueLocal.value - step.value;
        break;
      case "Home":
        value = valueMin.value;
        break;
      case "End":
        value = maxLocal.value;
        break;
      case "Delete":
      case "Backspace":
        $event.preventDefault();
        clear();
        return;
      default:
        if (/^\d$/.test($event.key) && +$event.key <= maxLocal.value) {
          value = +$event.key;
          if (value === 0 && !props.clearable) {
            return;
          }
          break;
        }
        return;
    }
    $event.preventDefault();
    setValue({
      value: Math.min(Math.max(value, valueMin.value), maxLocal.value),
      triggerDetails: "keyboard",
    });
  };

  return {
    onKeydown,
  };
}
