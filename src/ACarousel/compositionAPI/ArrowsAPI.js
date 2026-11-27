import {
  computed,
  toRef,
} from "vue";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "../utils/icons";

export default function ArrowsAPI(props, {
  count = computed(() => 0),
}) {
  const arrowNextIcon = toRef(props, "arrowNextIcon");
  const arrowPreviousIcon = toRef(props, "arrowPreviousIcon");
  const arrowsShow = toRef(props, "arrowsShow");
  const direction = toRef(props, "direction");

  const arrowsShowLocal = computed(() => {
    return arrowsShow.value && count.value > 1;
  });

  const isVertical = computed(() => {
    return direction.value === "vertical";
  });

  const arrowPreviousIconLocal = computed(() => {
    return arrowPreviousIcon.value || (isVertical.value ? ChevronUp : ChevronLeft);
  });

  const arrowNextIconLocal = computed(() => {
    return arrowNextIcon.value || (isVertical.value ? ChevronDown : ChevronRight);
  });

  return {
    arrowNextIconLocal,
    arrowPreviousIconLocal,
    arrowsShowLocal,
  };
}
