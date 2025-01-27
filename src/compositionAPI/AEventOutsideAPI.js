import {
  computed,
  onBeforeUnmount,
  ref,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function AEventOutsideAPI({
  $elements = computed(() => []),
  clickOutsideCallback = () => {},
}) {
  const clickEventName = ref("ontouchend" in document ? "touchstart" : "click");

  const clickOutsideEvent = $event => {
    // here I check that click was outside the el and his children
    let isClickInside = false;
    forEach($elements.value, $element => {
      if ($element === $event.target || $element.contains($event.target)) {
        // and if it did, call method provided in attribute value
        isClickInside = true;
        return false;
      }
    });
    if (!isClickInside) {
      clickOutsideCallback();
    }
  };

  const setEventClickOutside = () => {
    document.addEventListener(clickEventName.value, clickOutsideEvent);
  };

  const destroyEventClickOutside = () => {
    document.removeEventListener(clickEventName.value, clickOutsideEvent);
  };

  onBeforeUnmount(() => destroyEventClickOutside());

  return {
    setEventClickOutside,
    destroyEventClickOutside,
  };
}
