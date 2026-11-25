import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue";

export default function BallsAPI() {
  const dataBalls = computed(() => {
    return [
      {
        id: 1,
        src: "./assets/Basketball_ball_red_background.png",
        alt: getTranslatedText({
          placeholder: "_A_CAROUSEL_COMPONENT_ALT_BASKETBALL_BALL_",
        }),
        label: "_A_CAROUSEL_COMPONENT_LABEL_BASKETBALL_",
      },
      {
        id: 2,
        src: "./assets/Soccer_ball_red_background.png",
        alt: getTranslatedText({
          placeholder: "_A_CAROUSEL_COMPONENT_ALT_SOCCER_BALL_",
        }),
        label: "_A_CAROUSEL_COMPONENT_LABEL_SOCCER_",
      },
      {
        id: 3,
        src: "./assets/Tennis_ball_purple_background.png",
        alt: getTranslatedText({
          placeholder: "_A_CAROUSEL_COMPONENT_ALT_TENNIS_BALL_",
        }),
        label: "_A_CAROUSEL_COMPONENT_LABEL_TENNIS_",
      },
      {
        id: 4,
        src: "./assets/Volleyball_ball_red_background.png",
        alt: getTranslatedText({
          placeholder: "_A_CAROUSEL_COMPONENT_ALT_VOLLEY_BALL_",
        }),
        label: "_A_CAROUSEL_COMPONENT_LABEL_VOLLEYBALL_",
      },
    ];
  });

  return {
    dataBalls,
  };
}
