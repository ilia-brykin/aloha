import {
  h,
  Teleport,
} from "vue";

import PopperAPI from "./compositionAPI/PopperAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import placements from "../const/placements";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ATooltip",
  props: {
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_tooltip"),
    },
    placement: {
      type: String,
      required: false,
      default: "bottom-start",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    tag: {
      type: String,
      required: false,
      default: "span",
    },
    isHide: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const {
      closeTitle,
      closeTitleWithTimer,
      componentRef,
      isTitleVisible,
      mouseEnterTooltip,
      mouseLeaveTooltip,
      showTitle,
      titleRef,
      updateTitle,
      updateTitleOptions,
    } = PopperAPI(props);

    const {
      onBlur,
      onFocus,
      onMouseenter,
      onMouseleave,
    } = ToggleAPI(props, {
      showTitle,
      closeTitle,
      closeTitleWithTimer,
    });

    return {
      closeTitle,
      componentRef,
      isTitleVisible,
      mouseEnterTooltip,
      mouseLeaveTooltip,
      onBlur,
      onFocus,
      onMouseenter,
      onMouseleave,
      showTitle,
      titleRef,
      updateTitle,
      updateTitleOptions,
    };
  },
  render() {
    return h(this.tag, {
      ref: "componentRef",
      id: this.id,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
    }, [
      this.$slots.default && this.$slots.default(),
      this.isTitleVisible && h(Teleport, {
        to: "body",
      }, [
        h("div", {
          ref: "titleRef",
          class: "a_tooltip__container",
          onMouseenter: this.mouseEnterTooltip,
          onMouseleave: this.mouseLeaveTooltip,
        }, [
          this.$slots.title && this.$slots.title(),
          h("div", {
            "data-popper-arrow": true,
            class: "a_tooltip__arrow",
          }),
        ]),
      ]),
    ]);
  },
};
