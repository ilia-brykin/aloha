import {
  h,
} from "vue";
import {
  AElement,
  AKeyId,
  AKeyIndex,
} from "../../index";

import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";
import EventsAPI from "./compositionAPI/EventsAPI";

import {
  ACarouselPluginOptions,
} from "../../plugins/ACarouselPlugin";

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
      validator: value => ["dots"].indexOf(value) !== -1,
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
      ariaLabelTabsAttributes,
    } = AriaLabelAPI();

    const {
      changeActiveId,
      onPressBtn,
    } = EventsAPI(context);

    return {
      ariaLabelTabsAttributes,
      changeActiveId,
      onPressBtn,
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
            const IS_ACTIVE = this.activeId === item[AKeyId];
            const INDEX = item[AKeyIndex];
            const NUMBER = INDEX + 1;

            return h(AElement, {
              id: `${ this.parentId }_tab_${ NUMBER }`,
              "aria-selected": false,
              "aria-controls": `${ this.parentId }_item_${ NUMBER }`,
              class: [
                "a_carousel__tabs__btn",
                {
                  a_carousel__tabs__btn_active: IS_ACTIVE,
                },
              ],
              iconLeft: ACarouselPluginOptions.icons.dots,
              disabled: this.disabled,
              type: "button",
              tabindex: IS_ACTIVE ? 0 : -1,
              role: "tab",
              title: this.texts.controlsSlide,
              textScreenReader: this.texts.controlsSlide,
              extra: {
                number: NUMBER,
              },
              onClick: () => this.changeActiveId({ item }),
              onKeydown: this.onPressBtn,
            });
          }),
        ]),
      ]),
    ];
  },
};
