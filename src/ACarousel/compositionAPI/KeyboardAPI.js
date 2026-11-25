import {
  computed,
  toRef,
} from "vue";

/**
 * Keys in the tablist of the slides (WAI-ARIA tabs with automatic activation):
 * ArrowLeft / ArrowRight (ArrowUp / ArrowDown in vertical carousel) go to the previous / next slide,
 * Home / End to the first / last slide. In right-to-left the next slide is on the left.
 * Without loop the arrows stop at the first and the last slide.
 */
export default function KeyboardAPI(props, {
  isDisabledLocal = computed(() => false),
  toFirstSlide = () => {},
  toLastSlide = () => {},
  toNextSlide = () => {},
  toPreviousSlide = () => {},
}) {
  const direction = toRef(props, "direction");

  const getKeys = $event => {
    if (direction.value === "vertical") {
      return { next: "ArrowDown", previous: "ArrowUp" };
    }
    const IS_RTL = getComputedStyle($event.currentTarget).direction === "rtl";
    return IS_RTL ?
      { next: "ArrowLeft", previous: "ArrowRight" } :
      { next: "ArrowRight", previous: "ArrowLeft" };
  };

  const onKeydownTablist = $event => {
    const KEYS = getKeys($event);
    let action;
    if ($event.key === KEYS.next) {
      action = toNextSlide;
    } else if ($event.key === KEYS.previous) {
      action = toPreviousSlide;
    } else if ($event.key === "Home") {
      action = toFirstSlide;
    } else if ($event.key === "End") {
      action = toLastSlide;
    } else {
      return;
    }
    $event.preventDefault();
    if (isDisabledLocal.value) {
      return;
    }
    action({ withFocus: true });
  };

  return {
    onKeydownTablist,
  };
}
