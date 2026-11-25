import {
  computed,
  h,
} from "vue";

import ACarouselControlsIndicator from "./ACarouselControlsIndicator/ACarouselControlsIndicator";
import AElement from "../../AElement/AElement";
import {
  getAutoplayHtmlId,
} from "../utils/utils";

import {
  getTranslatedAttributes,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  PauseFill,
  PlayFill,
} from "../utils/icons";

export default {
  name: "ACarouselControls",
  props: {
    activeId: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    ariaDisabled: {
      type: Boolean,
      required: false,
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
    indicatorsShow: {
      type: Boolean,
      required: false,
      default: true,
    },
    indicatorsType: {
      type: String,
      required: false,
      default: "dots",
    },
    isAutoplayAvailable: {
      type: Boolean,
      required: false,
    },
    isPlaying: {
      type: Boolean,
      required: false,
    },
    parentId: {
      type: String,
      required: true,
    },
    texts: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "changeActiveId",
    "keydownTablist",
    "toggleAutoplay",
  ],
  setup(props) {
    const ariaLabelTabsAttributes = computed(() => {
      return getTranslatedAttributes({
        attr: "aria-label",
        placeholder: props.texts.controlsSlides,
        extra: props.extra,
      });
    });

    const autoplayText = computed(() => {
      return props.isPlaying ?
        props.texts.controlsStop :
        props.texts.controlsStart;
    });

    return {
      ariaLabelTabsAttributes,
      autoplayText,
    };
  },
  render() {
    if (!this.indicatorsShow && !this.isAutoplayAvailable) {
      return null;
    }

    return h("div", {
      class: "a_carousel__tabs__wrapper",
    }, [
      this.isAutoplayAvailable ?
        h(AElement, {
          id: getAutoplayHtmlId({ parentId: this.parentId }),
          "aria-disabled": this.ariaDisabled,
          class: [
            "a_carousel__autoplay",
            {
              a_carousel__autoplay_playing: this.isPlaying,
            },
          ],
          disabled: this.disabled,
          extra: this.extra,
          iconLeft: this.isPlaying ? PauseFill : PlayFill,
          textScreenReader: this.autoplayText,
          title: this.autoplayText,
          type: "button",
          onClick: () => this.$emit("toggleAutoplay"),
        }) :
        undefined,
      this.indicatorsShow ?
        h("div", {
          class: [
            "a_carousel__tabs",
            `a_carousel__tabs_${ this.indicatorsType }`,
          ],
          role: "tablist",
          "aria-orientation": this.direction === "vertical" ? "vertical" : undefined,
          ...this.ariaLabelTabsAttributes,
          onKeydown: $event => this.$emit("keydownTablist", $event),
        }, [
          ...this.data.map(item => {
            return h(ACarouselControlsIndicator, {
              activeId: this.activeId,
              "aria-disabled": this.ariaDisabled,
              data: item,
              disabled: this.disabled,
              extra: this.extra,
              indicatorsType: this.indicatorsType,
              parentId: this.parentId,
              texts: this.texts,
              onChangeActiveId: arg => this.$emit("changeActiveId", arg),
            });
          }),
        ]) :
        undefined,
    ]);
  },
};
