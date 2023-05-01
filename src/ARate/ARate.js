import { h, ref } from "vue";

import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import UpdateAPI from "./comositionAPI/updateAPI";
import MouseAPI from "./comositionAPI/mouseAPI";

export default {
  name: "ARate",
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
      required: false,
    },
    icon: {
      type: String,
      required: false,
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
    scoreTemplate: {
      type: String,
      default: "{value}",
    },
  },
  setup(props) {
    const {
      updateRatingPercentage,
      ratingPercentage,
      setRating,
    } = UpdateAPI(props);
    const {
      handleMouseEnter,
      handleMouseLeave,
      handleIconClick
    } = MouseAPI(props, {
      setRating,
    });
    const hoveredRating = ref(null);

    return {
      updateRatingPercentage,
      ratingPercentage,
      hoveredRating,
      handleMouseEnter,
      handleMouseLeave,
      handleIconClick,
    };
  },
  render() {
    const maxRating = 5;

    return h(
      "div",
      {
        class: "a_rate_container",
        disabled: this.disabled,
      },
      Array.from({ length: maxRating }, (_, index) => {
        const ratingValue = index + 1;
        const filledPercentage = ratingValue * 20;
        const isFilled = this.ratingPercentage >= filledPercentage;
        const isHalfFilled = this.ratingPercentage >= ratingValue * 20 - 10 && this.ratingPercentage < filledPercentage;
        const isQuarterFilled = this.ratingPercentage >= filledPercentage - 15 && this.ratingPercentage < filledPercentage - 5;
        const isThreeQuarterFilled = this.ratingPercentage >= filledPercentage - 5 && this.ratingPercentage < filledPercentage;
        const isHovered = ratingValue <= this.hoveredRating;

        return h(AIcon, {
          class: [
            "a_rate_icon",
            {
              filled: isFilled,
              half: isHalfFilled,
              quarter: isQuarterFilled,
              threeQuarter: isThreeQuarterFilled,
              disabled: this.disabled,
              hovered: isHovered,
            },
          ],
          icon: this.icon,
          onMouseenter: () => this.handleMouseEnter(ratingValue),
          onMouseleave: this.handleMouseLeave,
          onClick: () => this.handleIconClick(ratingValue),
        });
      }),
      this.showScore &&
      h(
        "span",
        {
          class: "a_rate_score",
        },
        this.scoreTemplate.replace("{value}", this.rating)
      ),
      h(ATranslation, {
        class: "a_rate_label",
        text: this.text,
        extra: this.extra,
      })
    );
  },
};
