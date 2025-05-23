import {
  h,
} from "vue";
import {
  AElement,
} from "../index";

import ACarouselControls from "./ACarouselControls/ACarouselControls";
import ACarouselItem from "./ACarouselItem/ACarouselItem";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";
import DataAPI from "./compositionAPI/DataAPI";

import ChevronLeft from "aloha-svg/dist/js/bootstrap/ChevronLeft";
import ChevronRight from "aloha-svg/dist/js/bootstrap/ChevronRight";
import {
  AKeyId,
} from "../const/AKeys";
import {
  castArray,
  every,
  isArray,
  uniqueId,
} from "lodash-es";

export default {
  name: "ACarousel",
  props: {
    ariaLabel: {
      type: String,
      required: true,
    },
    arrowLeftAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    arrowLeftIcon: {
      type: String,
      required: false,
      default: ChevronLeft,
    },
    arrowRightAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    arrowRightIcon: {
      type: String,
      required: false,
      default: ChevronRight,
    },
    arrowsShow: {
      type: Boolean,
      required: false,
      default: true,
    },
    arrowsTrigger: {
      type: [String, Array],
      default: "always",
      validator: value => {
        const values = castArray(value);

        return isArray(values) && every(values, v => ["always", "hover", "focus"].includes(v));
      },
    },
    arrowsPosition: {
      type: String,
      default: "sides-center", // positioned at the sides, vertically centered
      validator: value => [
        "sides-center", // arrows on the left and right sides, vertically centered (default)
        "sides-top", // arrows on the sides at the top
        "sides-bottom", // arrows on the sides at the bottom
        "with-indicators-before", // arrows before the indicator panel
        "with-indicators-after", // arrows after the indicator panel
        "with-indicators-sides", // arrows on the left and right of the indicator panel
        "top-left", // absolutely positioned in the top-left corner
        "top-right", // absolutely positioned in the top-right corner
        "bottom-left", // absolutely positioned in the bottom-left corner
        "bottom-right", // absolutely positioned in the bottom-right corner
      ].includes(value),
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
    id: {
      type: String,
      required: false,
      default: uniqueId("a_carousel_"),
    },
    indicatorsShow: {
      type: Boolean,
      required: false,
      default: true,
    },
    indicatorType: {
      type: String,
      required: false,
      default: "dots",
      validator: value => ["dots"].indexOf(value) !== -1,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "change",
    "play",
    "stop",
    "update:modelValue",
  ],
  setup(props) {
    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      dataLocal,
    } = DataAPI(props);

    const {
      activeId,
      changeActiveId,
      initActiveId,
      toNextSlide,
      toPreviousSlide,
    } = ActiveAPI(props, {
      dataLocal,
    });

    initActiveId();

    return {
      activeId,
      ariaLabelAttributes,
      changeActiveId,
      dataLocal,
      toNextSlide,
      toPreviousSlide,
    };
  },
  render() {
    return h("section", {
      id: this.id,
      "aria-roledescription": "carousel",
      class: "a_carousel",
      ...this.ariaLabelAttributes,
    }, [
      h("div", {
        class: "a_carousel__inner",
      }, [
        this.arrowsShow ?
          h(AElement, {
            disabled: this.disabled,
            iconLeft: this.arrowLeftIcon,
            type: "button",
            onClick: this.toPreviousSlide,
            ...this.arrowLeftAttributes,
          }) :
          undefined,
        h(ACarouselControls, {
          activeId: this.activeId,
          autoplayInterval: this.autoplayInterval,
          autoplayShow: this.autoplayShow,
          data: this.dataLocal,
          disabled: this.disabled,
          extra: this.extra,
          parentId: this.id,
          indicatorsShow: this.indicatorsShow,
          indicatorType: this.indicatorType,
          onChangeActiveId: this.changeActiveId,
          onToNextSlide: this.toNextSlide,
          onToPreviousSlide: this.toPreviousSlide,
        }),
        h("div", {
          "aria-live": "polite",
          class: "a_carousel__items",
        }, [
          ...this.dataLocal.map((item, index) => {
            return h(ACarouselItem, {
              key: item[AKeyId],
              activeId: this.activeId,
              dataCount: this.dataLocal.length,
              item,
              itemIndex: index,
              parentId: this.id,
            }, this.$slots);
          }),
        ]),
        this.arrowsShow ?
          h(AElement, {
            disabled: this.disabled,
            iconLeft: this.arrowRightIcon,
            type: "button",
            onClick: this.toNextSlide,
            ...this.arrowRightAttributes,
          }) :
          undefined,
      ]),
    ]);
  },
};
