import {
  h,
} from "vue";

import ACarouselControlsIndicator from "./ACarouselControlsIndicator/ACarouselControlsIndicator";

import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";

export default {
  name: "ACarouselControls",
  props: {
    activeId: {
      type: [String, Number],
      required: true,
    },
    autoplayInterval: {
      type: Number,
      required: false,
      default: 5000,
    },
    autoplayShow: {
      type: Boolean,
      required: false,
      default: false,
    },
    autoplayStart: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    parentId: {
      type: String,
      required: true,
    },
    indicatorsShow: {
      type: Boolean,
      required: false,
      default: true,
    },
    indicatorsType: {
      type: String,
      required: false,
      default: "dots",
      validator: value => ["dots", "squares"].indexOf(value) !== -1,
    },
    texts: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "changeActiveId",
    "toNextSlide",
    "toPreviousSlide",
  ],
  setup() {
    const {
      ariaLabelTabsAttributes,
    } = AriaLabelAPI();

    return {
      ariaLabelTabsAttributes,
    };
  },
  render() {
    if (this.data.length <= 1) {
      return null;
    }

    return [
      h("div", {
        class: "a_carousel__tabs__wrapper",
      }, [
        h("div", {
          class: [
            "a_carousel__tabs",
            this.indicatorsType ?
              `a_carousel__tabs_${ this.indicatorsType }` :
              "a_carousel__tabs_custom",
          ],
          role: "tablist",
          ...this.ariaLabelTabsAttributes,
        }, [
          ...this.data.map(item => {
            return h(ACarouselControlsIndicator, {
              activeId: this.activeId,
              data: item,
              disabled: this.disabled,
              indicatorsType: this.indicatorsType,
              parentId: this.parentId,
              texts: this.texts,
              onChangeActiveId: arg => this.$emit("changeActiveId", arg),
              onToNextSlide: arg => this.$emit("toNextSlide", arg),
              onToPreviousSlide: arg => this.$emit("toPreviousSlide", arg),
            });
          }),
        ]),
      ]),
    ];
  },
};
