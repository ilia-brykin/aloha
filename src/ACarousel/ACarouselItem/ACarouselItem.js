import {
  computed,
  h,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";

import {
  AKeyId,
} from "../../const/AKeys";

export default {
  name: "ACarouselItem",
  props: {
    activeId: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    cardOffset: {
      type: Number,
      required: false,
      default: undefined,
    },
    cardScale: {
      type: Number,
      required: false,
      default: 0.83,
    },
    dataCount: {
      type: Number,
      required: true,
    },
    direction: {
      type: String,
      required: false,
      default: "horizontal",
    },
    hasTab: {
      type: Boolean,
      required: false,
    },
    isEntering: {
      type: Boolean,
      required: false,
    },
    isLeaving: {
      type: Boolean,
      required: false,
    },
    item: {
      type: Object,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
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
    "animationEnd",
    "clickCard",
  ],
  setup(props, { emit }) {
    const {
      ariaLabelAttributes,
      idLocal,
      roleAttributes,
    } = AttributesAPI(props);

    const isActive = computed(() => {
      return props.item[AKeyId] === props.activeId;
    });

    const isCard = computed(() => {
      return props.cardOffset !== undefined;
    });

    const isCardSide = computed(() => {
      return isCard.value && Math.abs(props.cardOffset) === 1;
    });

    const cardStyle = computed(() => {
      if (!isCard.value) {
        return undefined;
      }
      const OFFSET = Math.max(-2, Math.min(2, props.cardOffset));
      const SCALE = OFFSET === 0 ? 1 : props.cardScale;
      const TRANSLATE = props.direction === "vertical" ?
        `translateY(${ OFFSET * 55 }%)` :
        `translateX(calc(${ OFFSET * 55 }% * var(--_a_carousel_dir, 1)))`;
      return {
        transform: `${ TRANSLATE } scale(${ SCALE })`,
      };
    });

    const onAnimationend = $event => {
      // animations in the content of the slide bubble too
      if ($event.target !== $event.currentTarget || !props.isLeaving) {
        return;
      }
      emit("animationEnd");
    };

    return {
      ariaLabelAttributes,
      cardStyle,
      idLocal,
      isActive,
      isCard,
      isCardSide,
      onAnimationend,
      roleAttributes,
    };
  },
  render() {
    return h("div", {
      id: this.idLocal,
      ...this.roleAttributes,
      "aria-roledescription": "slide",
      ...this.ariaLabelAttributes,
      // the other slides are hidden or (card, animation) only visible: not for the screen reader
      "aria-hidden": this.isActive ? undefined : "true",
      class: [
        "a_carousel__item",
        {
          a_carousel__item_active: this.isActive,
          a_carousel__item_enter: this.isEntering,
          a_carousel__item_leaving: this.isLeaving,
          a_carousel__item_card_side: this.isCardSide,
          a_carousel__item_card_far: this.isCard && Math.abs(this.cardOffset) > 1,
        },
      ],
      style: this.cardStyle,
      onAnimationend: this.onAnimationend,
    }, [
      h("div", {
        class: "a_carousel__item__content",
        // the content of a visible inactive slide can not be focused
        inert: this.isActive ? undefined : "",
      }, [
        this.$slots.item ?
          this.$slots.item({
            activeId: this.activeId,
            dataCount: this.dataCount,
            item: this.item,
            itemIndex: this.itemIndex,
            isActive: this.isActive,
            parentId: this.parentId,
          }) :
          undefined,
      ]),
      this.isCardSide ?
        h("div", {
          class: "a_carousel__item__mask",
          "aria-hidden": "true",
          onClick: () => this.$emit("clickCard", { index: this.itemIndex }),
        }) :
        undefined,
    ]);
  },
};
