import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACarousel,
  ATranslation,
} from "aloha-vue";

import BallsAPI from "../compositionAPI/BallsAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageCarouselAutoplay",
  components: {
    ACarousel,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      dataBalls: data,
    } = BallsAPI();

    const onPlay = () => {
      console.log("play");
    };

    const onStop = () => {
      console.log("stop");
    };

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      data,
      onPlay,
      onStop,
    };
  },
};
