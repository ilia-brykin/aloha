import {
  h,
  onBeforeUnmount,
  onMounted,
  watch,
} from "vue";

import ACarouselBtn from "./ACarouselBtn/ACarouselBtn";
import ACarouselControls from "./ACarouselControls/ACarouselControls";
import ACarouselItem from "./ACarouselItem/ACarouselItem";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import DataAPI from "./compositionAPI/DataAPI";
import IndicatorsAPI from "./compositionAPI/IndicatorsAPI";
import TextsAPI from "./compositionAPI/TextsAPI";

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
    ariaDisabled: {
      type: Boolean,
      required: false,
    },
    ariaLabel: {
      type: String,
      required: true,
    },
    arrowNextAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    arrowNextIcon: {
      type: String,
      required: false,
      default: ChevronRight,
    },
    arrowPreviousAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    arrowPreviousIcon: {
      type: String,
      required: false,
      default: ChevronLeft,
    },
    arrowsPlacement: {
      type: String,
      default: "sides-center", // positioned at the sides, vertically centered
      validator: value => [
        "sides-center", // arrows on the left and right sides, vertically centered (default)
        /*
         * "sides-top", // arrows on the sides at the top
         * "sides-bottom", // arrows on the sides at the bottom
         * "with-indicators-before", // arrows before the indicator panel
         * "with-indicators-after", // arrows after the indicator panel
         * "with-indicators-sides", // arrows on the left and right of the indicator panel
         * "top-left", // absolutely positioned in the top-left corner
         * "top-right", // absolutely positioned in the top-right corner
         * "bottom-left", // absolutely positioned in the bottom-left corner
         * "bottom-right", // absolutely positioned in the bottom-right corner
         */
      ].includes(value),
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
      required: false,
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
      default: () => uniqueId("a_carousel_"),
    },
    indicatorsAutoLimit: {
      type: Boolean,
      required: false,
      default: false,
    },
    indicatorsLimit: {
      type: Number,
      required: false,
      default: undefined,
    },
    indicatorsPlacement: {
      type: String,
      required: false,
      default: "bottom",
      validator: value => [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
      ].indexOf(value) !== -1,
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
      validator: value => ["dots"].indexOf(value) !== -1,
    },
    indicatorWidth: {
      type: Number,
      required: false,
      default: 34,
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
    texts: {
      type: Object,
      required: false,
      default: () => ({
        nextSlide: "_A_CAROUSEL_NEXT_SLIDE_",
        previousSlide: "_A_CAROUSEL_PREVIOUS_SLIDE_",
        controlsSlide: "_A_CAROUSEL_CONTROLS_SLIDE_{{number}}_",
        controlsSlides: "_A_CAROUSEL_CONTROLS_SLIDES_",
        controlsStart: "_A_CAROUSEL_CONTROLS_START_",
        controlsStop: "_A_CAROUSEL_CONTROLS_STOP_",
        itemAriaLabel: "_A_CAROUSEL_ITEM_ARIA_LABEL_{{number}}_{{count}}_",
      }),
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
      textsLocal,
    } = TextsAPI(props);

    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      arrowsPlacementClass,
      arrowsTriggerClass,
      indicatorsPlacementClass,
    } = ClassAPI(props);

    const {
      dataLocal,
    } = DataAPI(props);

    const {
      carouselRef,
      indicatorsData,
      initObserver,
      removeObserver,
      useObserver,
    } = IndicatorsAPI(props, {
      dataLocal,
    });

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

    watch(useObserver, newValue => {
      if (newValue) {
        initObserver();
      } else {
        removeObserver();
      }
    });

    onMounted(() => {
      initObserver();
    });

    onBeforeUnmount(() => {
      removeObserver();
    });

    return {
      activeId,
      ariaLabelAttributes,
      arrowsPlacementClass,
      arrowsTriggerClass,
      carouselRef,
      changeActiveId,
      dataLocal,
      indicatorsData,
      indicatorsPlacementClass,
      textsLocal,
      toNextSlide,
      toPreviousSlide,
    };
  },
  render() {
    return h("section", {
      id: this.id,
      "aria-roledescription": "carousel",
      class: [
        "a_carousel",
        this.indicatorsPlacementClass,
        this.arrowsPlacementClass,
        this.arrowsTriggerClass,
      ],
      ...this.ariaLabelAttributes,
    }, [
      h("div", {
        ref: "carouselRef",
        class: "a_carousel__inner",
      }, [
        this.arrowsShow ?
          h(ACarouselBtn, {
            btnAttributes: this.arrowPreviousAttributes,
            disabled: this.disabled,
            icon: this.arrowPreviousIcon,
            texts: this.textsLocal,
            type: "previous",
            onToSlide: this.toPreviousSlide,
          }) :
          undefined,
        h(ACarouselControls, {
          activeId: this.activeId,
          autoplayInterval: this.autoplayInterval,
          autoplayShow: this.autoplayShow,
          data: this.indicatorsData,
          disabled: this.disabled,
          extra: this.extra,
          parentId: this.id,
          indicatorsShow: this.indicatorsShow,
          indicatorsType: this.indicatorsType,
          texts: this.texts,
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
              texts: this.textsLocal,
            }, this.$slots);
          }),
        ]),
        this.arrowsShow ?
          h(ACarouselBtn, {
            btnAttributes: this.arrowNextAttributes,
            disabled: this.disabled,
            icon: this.arrowNextIcon,
            texts: this.textsLocal,
            type: "next",
            onToSlide: this.toNextSlide,
          }) :
          undefined,
      ]),
    ]);
  },
};
