import { h, toRefs, computed } from "vue";

import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";
import ABlock from "../ABlock/ABlock";

export default {
  name: "ARate",
  components: {
    AIcon,
    ATranslation,
    ABlock,
  },
  props: {
    text: {
      type: String,
      default: null,
    },
    extra: {
      type: Object,
      required: false,
    },
    rating: {
      type: Number,
      default: 5,
    },
    icon: {
      type: String,
      default: "Star",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    showText: {
      type: Boolean,
      default: false,
    },
    normalValue: {
      type: Number,
      default: 50,
    },
  },
  setup(props) {
    const { rating, normalValue, showScore, showText, disabled, icon, text, extra } = toRefs(props);

    const scoreTemplate = {
      0: "Oops",
      20: "Disappointed",
      40: "Normal",
      60: "Good",
      80: "Great",
      100: "Exceptional"
    };

    const displayText = computed(() => {
      const segments = Object.keys(scoreTemplate).sort((a, b) => a - b);
      for (let i = 0; i < segments.length; i++) {
        if (normalValue.value < segments[i]) {
          return scoreTemplate[segments[i - 1]];
        }
      }
      return scoreTemplate[100];
    });

    const displayScore = computed(() => (rating.value * normalValue.value / 100).toFixed(1));

    return { rating, normalValue, showScore, showText, disabled, icon, text, extra, displayText, displayScore };
  },
  render() {
    return h("div", {
      class: "a_rate_container",
      disabled: this.disabled,
    }, [
      ...Array.from({ length: this.rating }, (_, index) => h(AIcon, {
        class: "a_rate_icon",
        icon: this.icon,
        key: index
      })),
      h(ABlock, {
        width: 100,
        height: 20,
        normalValue: this.normalValue,
        readonly: this.disabled,
        showValue: this.showScore,
        on: {
          "update:normalValue": newValue => {
            this.normalValue = newValue;
          }
        },
      }),
      this.showScore && h("span", {
        class: "a_rate_score",
      }, this.displayScore),
      this.showText && h("span", {
        class: "a_rate_text",
      }, this.displayText),
      h(ATranslation, {
        class: "a_rate_label",
        text: this.text,
        extra: this.extra,
      })
    ]);
  },
};
