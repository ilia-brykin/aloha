import {
  computed,
  toRefs,
} from "vue";

export default function TextsAPI(props) {
  const texts = toRefs(props, "texts");

  const textsLocal = computed(() => {
    return {
      nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
      previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
      controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
      controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
      controlsStart: "_A_CAROUSEL_CONTROLS_START_",
      controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
      itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      ...texts.value,
    };
  });

  return {
    textsLocal,
  };
}
