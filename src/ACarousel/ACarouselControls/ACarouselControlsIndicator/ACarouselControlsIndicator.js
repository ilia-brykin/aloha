import {
  h,
  resolveComponent,
} from "vue";
import {
  AElement,
  AKeyChildren,
} from "../../../index";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import IconAPI from "./compositionAPI/IconAPI";

export default {
  name: "ACarouselControlsIndicator",
  props: {
    activeId: {
      type: [String, Number],
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    hide: {
      type: Boolean,
      required: false,
    },
    indicatorsType: {
      type: String,
      required: false,
      default: "dots",
      validator: value => ["dots", "squares"].indexOf(value) !== -1,
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
    "toNextSlide",
    "toPreviousSlide",
  ],
  setup(props, context) {
    const {
      indicatorIcon,
    } = IconAPI(props);

    const {
      isActive,
      isActiveInChildren,
    } = ActiveAPI(props);

    const {
      changeActiveId,
      onPressBtn,
    } = EventsAPI(context);

    const {
      ariaControls,
      id,
      number,
      tabindex,
    } = AttributesAPI(props, {
      isActive,
    });

    return {
      ariaControls,
      changeActiveId,
      id,
      indicatorIcon,
      isActive,
      isActiveInChildren,
      number,
      onPressBtn,
      tabindex,
    };
  },
  render() {
    return h("div", {
      class: "a_carousel__tabs__btn__wrapper",
    }, [
      h(AElement, {
        id: this.id,
        "aria-selected": false,
        "aria-controls": this.ariaControls,
        class: [
          "a_carousel__tabs__btn",
          {
            a_carousel__tabs__btn_active: this.isActive,
            // "a_carousel__tabs__btn_hide a_sr_only_focusable": item[AKeyHide],
            a_carousel__tabs__btn_hide: this.hide,
          },
        ],
        iconLeft: this.indicatorIcon,
        disabled: this.disabled,
        type: "button",
        tabindex: this.tabindex,
        role: "tab",
        title: this.texts.controlsSlide,
        textScreenReader: this.texts.controlsSlide,
        extra: {
          number: this.number,
        },
        onClick: () => this.changeActiveId({ item: this.data }),
        onKeydown: this.onPressBtn,
      }),
      this.data?.[AKeyChildren]?.length ?
        h("div", {
          class: [
            "a_carousel__tabs__btn__children",
            {
              a_carousel__tabs__btn__children_active: this.isActiveInChildren,
            },
          ],
        }, [
          this.data[AKeyChildren].map(item => {
            return h(resolveComponent("ACarouselControlsIndicator"), {
              activeId: this.activeId,
              data: item,
              disabled: this.disabled,
              hide: true,
              indicatorsType: this.indicatorsType,
              parentId: this.parentId,
              texts: this.texts,
              onChangeActiveId: arg => this.$emit("changeActiveId", arg),
              onToNextSlide: arg => this.$emit("toNextSlide", arg),
              onToPreviousSlide: arg => this.$emit("toPreviousSlide", arg),
            });
          }),
        ]) :
        "",
    ]);
  },
};
