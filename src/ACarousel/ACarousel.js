import {
  computed,
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
import ArrowsAPI from "./compositionAPI/ArrowsAPI";
import AutoplayAPI from "./compositionAPI/AutoplayAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import DataAPI from "./compositionAPI/DataAPI";
import IndicatorsAPI from "./compositionAPI/IndicatorsAPI";
import KeyboardAPI from "./compositionAPI/KeyboardAPI";
import TextsAPI, {
  CAROUSEL_TEXTS_DEFAULT,
} from "./compositionAPI/TextsAPI";

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
      default: undefined,
    },
    arrowPreviousAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    arrowPreviousIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    arrowsPlacement: {
      type: String,
      default: "sides-center",
      validator: value => [
        "sides-center", // arrows on the sides, the whole height (default)
        "sides-top", // round arrows on the sides at the top
        "sides-bottom", // round arrows on the sides at the bottom
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
    autoplayPauseOnHover: {
      type: Boolean,
      required: false,
      default: true,
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
    cardScale: {
      type: Number,
      required: false,
      default: 0.83,
      validator: value => value > 0 && value <= 1,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    direction: {
      type: String,
      required: false,
      default: "horizontal",
      validator: value => ["horizontal", "vertical"].includes(value),
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
    height: {
      type: String,
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
    indicatorsMargin: {
      type: Number,
      required: false,
      default: 6,
      validator: value => value >= 0,
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
        "outside",
      ].includes(value),
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
      validator: value => ["dots", "squares", "labels"].includes(value),
    },
    indicatorWidth: {
      type: Number,
      required: false,
      default: 2.125,
      validator: value => value >= 0,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    keyLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    loop: {
      type: Boolean,
      required: false,
      default: true,
    },
    modelValue: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
    motionBlur: {
      type: Boolean,
      required: false,
      default: false,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({ ...CAROUSEL_TEXTS_DEFAULT }),
    },
    transition: {
      type: String,
      required: false,
      default: "slide",
      validator: value => ["slide", "fade", "none"].includes(value),
    },
    type: {
      type: String,
      required: false,
      default: "default",
      validator: value => ["default", "card"].includes(value),
    },
  },
  emits: [
    "change",
    "init",
    "play",
    "stop",
    "update:modelValue",
  ],
  setup(props, context) {
    const isDisabledLocal = computed(() => {
      return props.disabled || props.ariaDisabled;
    });

    const {
      textsLocal,
    } = TextsAPI(props);

    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      count,
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
      arrowNextIconLocal,
      arrowPreviousIconLocal,
      arrowsShowLocal,
    } = ArrowsAPI(props, {
      count,
    });

    const {
      activeId,
      activeIndex,
      canGoNext,
      canGoPrevious,
      changeActiveId,
      clearLeaving,
      initActiveId,
      leavingId,
      setActiveItem,
      slideDirection,
      toFirstSlide,
      toLastSlide,
      toNextSlide,
      toPreviousSlide,
    } = ActiveAPI(props, context, {
      count,
      dataLocal,
      isDisabledLocal,
    });

    const {
      carouselClass,
      itemsStyle,
    } = ClassAPI(props, {
      slideDirection,
    });

    const {
      ariaLive,
      isAutoplayAvailable,
      isPlaying,
      onFocusin,
      onMouseenter,
      onMouseleave,
      play,
      stop,
      toggleAutoplay,
    } = AutoplayAPI(props, context, {
      activeIndex,
      count,
      isDisabledLocal,
      toNextSlide,
    });

    const {
      onKeydownTablist,
    } = KeyboardAPI(props, {
      isDisabledLocal,
      toFirstSlide,
      toLastSlide,
      toNextSlide,
      toPreviousSlide,
    });

    // tabs only with more than one slide, otherwise every slide is a named group
    const hasTabs = computed(() => {
      return props.indicatorsShow && count.value > 1;
    });

    // position of the slide relative to the active slide in the mode card (-1 left, 0 active, 1 right)
    const getCardOffset = index => {
      let offset = index - activeIndex.value;
      if (props.loop && count.value > 2) {
        if (offset > count.value / 2) {
          offset -= count.value;
        } else if (offset < -count.value / 2) {
          offset += count.value;
        }
      }
      return offset;
    };

    const onClickCard = ({ index }) => {
      const OFFSET = getCardOffset(index);
      if (OFFSET === 1) {
        toNextSlide();
      } else if (OFFSET === -1) {
        toPreviousSlide();
      }
    };

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
      clearLeaving();
    });

    context.expose({
      activeId,
      activeIndex,
      isPlaying,
      next: toNextSlide,
      play,
      previous: toPreviousSlide,
      setActiveItem,
      stop,
    });

    return {
      activeId,
      ariaLabelAttributes,
      ariaLive,
      arrowNextIconLocal,
      arrowPreviousIconLocal,
      arrowsShowLocal,
      canGoNext,
      canGoPrevious,
      carouselClass,
      carouselRef,
      changeActiveId,
      clearLeaving,
      count,
      dataLocal,
      getCardOffset,
      hasTabs,
      indicatorsData,
      isAutoplayAvailable,
      isDisabledLocal,
      isPlaying,
      itemsStyle,
      leavingId,
      onClickCard,
      onFocusin,
      onKeydownTablist,
      onMouseenter,
      onMouseleave,
      textsLocal,
      toggleAutoplay,
      toNextSlide,
      toPreviousSlide,
    };
  },
  render() {
    const IS_CARD = this.type === "card";

    return h("section", {
      id: this.id,
      "aria-roledescription": "carousel",
      class: this.carouselClass,
      ...this.ariaLabelAttributes,
      onFocusin: this.onFocusin,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
    }, [
      h("div", {
        ref: "carouselRef",
        class: "a_carousel__inner",
      }, [
        // WAI-ARIA: the button of the rotation is the first element in the order of the focus
        h(ACarouselControls, {
          activeId: this.activeId,
          "aria-disabled": this.ariaDisabled,
          data: this.indicatorsData,
          direction: this.direction,
          disabled: this.disabled,
          extra: this.extra,
          indicatorsShow: this.hasTabs,
          indicatorsType: this.indicatorsType,
          isAutoplayAvailable: this.isAutoplayAvailable,
          isPlaying: this.isPlaying,
          parentId: this.id,
          texts: this.textsLocal,
          onChangeActiveId: this.changeActiveId,
          onKeydownTablist: this.onKeydownTablist,
          onToggleAutoplay: this.toggleAutoplay,
        }),
        this.arrowsShowLocal ?
          h(ACarouselBtn, {
            "aria-disabled": this.ariaDisabled || !this.canGoPrevious,
            btnAttributes: this.arrowPreviousAttributes,
            disabled: this.disabled,
            extra: this.extra,
            icon: this.arrowPreviousIconLocal,
            texts: this.textsLocal,
            type: "previous",
            onToSlide: () => this.toPreviousSlide(),
          }) :
          undefined,
        h("div", {
          "aria-live": this.ariaLive,
          class: "a_carousel__items",
          style: this.itemsStyle,
        }, [
          ...this.dataLocal.map((item, index) => {
            const ITEM_ID = item[AKeyId];
            return h(ACarouselItem, {
              key: ITEM_ID,
              activeId: this.activeId,
              cardOffset: IS_CARD ? this.getCardOffset(index) : undefined,
              cardScale: this.cardScale,
              dataCount: this.count,
              direction: this.direction,
              hasTab: this.hasTabs,
              isLeaving: this.leavingId !== undefined && ITEM_ID === this.leavingId,
              isEntering: this.leavingId !== undefined && ITEM_ID === this.activeId,
              item,
              itemIndex: index,
              parentId: this.id,
              texts: this.textsLocal,
              onAnimationEnd: this.clearLeaving,
              onClickCard: this.onClickCard,
            }, this.$slots);
          }),
        ]),
        this.arrowsShowLocal ?
          h(ACarouselBtn, {
            "aria-disabled": this.ariaDisabled || !this.canGoNext,
            btnAttributes: this.arrowNextAttributes,
            disabled: this.disabled,
            extra: this.extra,
            icon: this.arrowNextIconLocal,
            texts: this.textsLocal,
            type: "next",
            onToSlide: () => this.toNextSlide(),
          }) :
          undefined,
      ]),
    ]);
  },
};
