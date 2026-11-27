import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getAutoplayHtmlId,
  prefersReducedMotion,
} from "../utils/utils";

/**
 * Automatic rotation after the WAI-ARIA carousel pattern:
 * - a button to start and stop it (it can not be hidden, WCAG 2.2.2),
 * - it stops when the focus goes into the carousel and starts again only with the button,
 * - it pauses while the mouse is over the carousel (autoplay-pause-on-hover),
 * - it does not start by itself with prefers-reduced-motion,
 * - without loop it stops on the last slide.
 */
export default function AutoplayAPI(props, { emit }, {
  activeIndex = computed(() => -1),
  count = computed(() => 0),
  isDisabledLocal = computed(() => false),
  toNextSlide = () => {},
}) {
  const autoplayInterval = toRef(props, "autoplayInterval");
  const autoplayPauseOnHover = toRef(props, "autoplayPauseOnHover");
  const autoplayShow = toRef(props, "autoplayShow");
  const autoplayStart = toRef(props, "autoplayStart");
  const id = toRef(props, "id");
  const loop = toRef(props, "loop");

  const isPlaying = ref(false);
  const isHovered = ref(false);
  let timer = undefined;

  const isAutoplayAvailable = computed(() => {
    return (autoplayShow.value || autoplayStart.value) && count.value > 1;
  });

  const isRunning = computed(() => {
    return isPlaying.value && !(autoplayPauseOnHover.value && isHovered.value);
  });

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }
  };

  const play = () => {
    if (isPlaying.value || isDisabledLocal.value || count.value <= 1) {
      return;
    }
    isPlaying.value = true;
    emit("play");
  };

  const stop = () => {
    if (!isPlaying.value) {
      return;
    }
    isPlaying.value = false;
    clearTimer();
    emit("stop");
  };

  const toggleAutoplay = () => {
    if (isPlaying.value) {
      stop();
    } else {
      play();
    }
  };

  const onTimer = () => {
    timer = undefined;
    if (!loop.value && activeIndex.value >= count.value - 1) {
      stop();
      return;
    }
    toNextSlide();
  };

  // starts again after every change of the slide, so every slide is shown the whole interval
  const startTimer = () => {
    clearTimer();
    if (!isRunning.value) {
      return;
    }
    timer = setTimeout(onTimer, autoplayInterval.value);
  };

  const onFocusin = $event => {
    if ($event.target?.id === getAutoplayHtmlId({ parentId: id.value })) {
      return;
    }
    stop();
  };

  const onMouseenter = () => {
    isHovered.value = true;
  };

  const onMouseleave = () => {
    isHovered.value = false;
  };

  // while the slides change by themselves, the screen reader must not read every slide
  const ariaLive = computed(() => {
    return isPlaying.value ? "off" : "polite";
  });

  watch([isRunning, activeIndex, autoplayInterval], startTimer);

  watch(autoplayStart, newValue => {
    if (newValue) {
      play();
    } else {
      stop();
    }
  });

  watch([isDisabledLocal, count], () => {
    if (isDisabledLocal.value || count.value <= 1) {
      stop();
    }
  });

  onMounted(() => {
    if (autoplayStart.value && !prefersReducedMotion()) {
      play();
    }
  });

  onBeforeUnmount(() => {
    clearTimer();
  });

  return {
    ariaLive,
    isAutoplayAvailable,
    isPlaying,
    onFocusin,
    onMouseenter,
    onMouseleave,
    play,
    stop,
    toggleAutoplay,
  };
}
