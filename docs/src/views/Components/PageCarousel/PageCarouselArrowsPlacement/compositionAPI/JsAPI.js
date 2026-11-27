export default function JsAPI() {
  const codeJs = `import {
  computed,
} from "vue";

import {
  ACarousel,
  getTranslatedText,
} from "aloha-vue";

export default {
  name: "PageCarouselArrowsPlacement",
  components: {
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

    return {
      data,
    };
  },
};`;

  return {
    codeJs,
  };
}
