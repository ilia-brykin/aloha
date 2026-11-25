import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ACarousel,
  ATranslation,
} from "aloha-vue";

import BallsAPI from "../compositionAPI/BallsAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageCarouselModel",
  components: {
    AButton,
    ACarousel,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      dataBalls: data,
    } = BallsAPI();

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

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      carouselRef,
      codeHtml,
      codeJs,
      data,
      model,
      toLast,
      toNext,
      toPrevious,
    };
  },
};
