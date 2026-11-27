import {
  computed,
  toRef,
} from "vue";

export const CAROUSEL_TEXTS_DEFAULT = {
  nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
  previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
  controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
  controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
  controlsStart: "_A_CAROUSEL_CONTROLS_START_",
  controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
  itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
};

export default function TextsAPI(props) {
  const texts = toRef(props, "texts");

  // own texts can replace only some of the default texts
  const textsLocal = computed(() => {
    return {
      ...CAROUSEL_TEXTS_DEFAULT,
      ...texts.value,
    };
  });

  return {
    textsLocal,
  };
}
