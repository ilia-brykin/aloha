export default function JsAPI() {
  const codeJs = `import {
  computed,
  ref,
} from "vue";

import {
  AButton,
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselModel",
  components: {
    AButton,
    ACarousel,
  },
  setup() {
    const data = computed(() => {
      return [
        {
          id: 1,
          src: "./assets/Basketball_ball_red_background.png",
          alt: getTranslatedText({ placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_" }),
          label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
        },
        // ...
      ];
    });

    const model = ref(2);
    const carouselRef = ref(undefined);

    const toPrevious = () => {
      carouselRef.value.previous();
    };

    const toNext = () => {
      carouselRef.value.next();
    };

    const toLast = () => {
      carouselRef.value.setActiveItem(4);
    };

    return {
      carouselRef,
      data,
      model,
      toLast,
      toNext,
      toPrevious,
    };
  },
};`;

  return {
    codeJs,
  };
}
