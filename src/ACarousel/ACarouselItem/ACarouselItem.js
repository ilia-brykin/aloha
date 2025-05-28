import {
  h,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import IsActiveAPI from "./compositionAPI/IsActiveAPI";


export default {
  name: "ACarouselItem",
  props: {
    activeId: {
      type: [String, Number],
      required: true,
    },
    dataCount: {
      type: Number,
      required: true,
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
    "change",
    "play",
    "stop",
    "update:modelValue",
  ],
  setup(props) {
    const {
      ariaLabelAttributes,
      idLocal,
    } = AttributesAPI(props);

    const {
      isActive,
    } = IsActiveAPI(props);

    return {
      ariaLabelAttributes,
      idLocal,
      isActive,
    };
  },
  render() {
    return h("div", {
      id: this.idLocal,
      "aria-roledescription": "slide",
      class: [
        "a_carousel__item",
        {
          a_carousel__item_active: this.isActive,
        },
      ],
      ...this.ariaLabelAttributes,
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
    ]);
  },
};
