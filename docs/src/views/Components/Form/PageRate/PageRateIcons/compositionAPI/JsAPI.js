export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

import EmojiFrownFill from "aloha-svg/dist/js/bootstrap/EmojiFrownFill";
import EmojiNeutral from "aloha-svg/dist/js/bootstrap/EmojiNeutral";
import EmojiNeutralFill from "aloha-svg/dist/js/bootstrap/EmojiNeutralFill";
import EmojiSmileFill from "aloha-svg/dist/js/bootstrap/EmojiSmileFill";
import Heart from "aloha-svg/dist/js/bootstrap/Heart";
import HeartFill from "aloha-svg/dist/js/bootstrap/HeartFill";

export default {
  name: "PageRateIcons",
  components: {
    ARate,
  },
  setup() {
    const modelHeart = ref(3);
    const modelEmoji = ref(4);
    const iconsEmoji = [EmojiFrownFill, EmojiNeutralFill, EmojiSmileFill];
    const colorsEmoji = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];

    return {
      colorsEmoji,
      EmojiNeutral,
      Heart,
      HeartFill,
      iconsEmoji,
      modelEmoji,
      modelHeart,
    };
  },
};`;

  return {
    codeJs,
  };
}
