import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ARate,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import EmojiFrownFill from "aloha-svg/dist/js/bootstrap/EmojiFrownFill";
import EmojiNeutral from "aloha-svg/dist/js/bootstrap/EmojiNeutral";
import EmojiNeutralFill from "aloha-svg/dist/js/bootstrap/EmojiNeutralFill";
import EmojiSmileFill from "aloha-svg/dist/js/bootstrap/EmojiSmileFill";
import Heart from "aloha-svg/dist/js/bootstrap/Heart";
import HeartFill from "aloha-svg/dist/js/bootstrap/HeartFill";

export default {
  name: "PageRateIcons",
  components: {
    AlohaExample,
    ARate,
  },
  setup() {
    const modelHeart = ref(3);
    const modelEmoji = ref(4);
    const iconsEmoji = [EmojiFrownFill, EmojiNeutralFill, EmojiSmileFill];
    const colorsEmoji = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      colorsEmoji,
      EmojiNeutral,
      Heart,
      HeartFill,
      iconsEmoji,
      modelEmoji,
      modelHeart,
    };
  },
};
