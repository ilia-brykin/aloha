import {
  h,
} from "vue";
import {
  AElement,
} from "../../index";

import AriaLabelAPI from "./AriaLabelAPI";

export default {
  name: "ACarouselControls",
  props: {
    arrowLeftAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    arrowLeftIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    arrowRightAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    arrowRightIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    arrowsShow: {
      type: Boolean,
      required: false,
      default: true,
    },
    arrowsTrigger: {
      type: [String, Array],
      required: false,
      default: "always",
    },
    arrowsPosition: {
      type: String,
      required: false,
      default: "sides-center",
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
    indicatorType: {
      type: String,
      required: false,
      default: "dots",
      validator: value => ["dots"].indexOf(value) !== -1,
    },
  },
  setup() {
    const {
      ariaLabelTabsAttributes,
    } = AriaLabelAPI();

    return {
      ariaLabelTabsAttributes,
    };
  },
  render() {
    return [
      h("div", {
        class: "a_carousel__tabs__wrapper",
      }, [
        h("div", {
          class: "a_carousel__tabs",
          role: "tablist",
          ...this.ariaLabelTabsAttributes,
        }, [
          ...this.data.map((item, itemIndex) => {
            return h(AElement, {
              type: "button",
              role: "tab",
              ariaLabel: "_A_CAROUSEL_TAB_LABEL_{{number}}_",
              extra: {
                number: itemIndex + 1,
              },
            });
          }),
        ]),
      ]),
    ];
  },
};
