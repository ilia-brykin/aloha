import {
  h,
  Teleport,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import PopperAPI from "./compositionAPI/PopperAPI";
import PopperContainerAPI from "./compositionAPI/PopperContainerAPI";
import TagAPI from "./compositionAPI/TagAPI";
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
    timeClose: {
      type: Number,
      required: false,
      default: 300,
    },
    minWidth: {
      type: Number,
      required: false,
      default: 200,
    },
    width: {
      type: Number,
      required: false,
      default: undefined,
    },
    maxWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: "a_tooltip_container",
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

    const {
      tagLocal,
    } = TagAPI(props);

    const {
      ariaDescribedby,
      tooltipStyles,
    } = AttributesAPI(props);

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    addPopperContainerInBody();

    return {
      ariaDescribedby,
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
      popperContainerIdSelector,
      tagLocal,
      titleRef,
      tooltipStyles,
      updateTitle,
      updateTitleOptions,
    };
  },
  render() {
    return h(this.tagLocal, {
      ref: "componentRef",
      id: this.id,
      "aria-describedby": this.ariaDescribedby,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
    }, {
      default: () => [
        this.$slots.default && this.$slots.default(),
        !this.isHide && h(Teleport, {
          to: this.popperContainerIdSelector,
        }, [
          h("div", {
            id: this.ariaDescribedby,
            class: "a_sr_only",
          }, [
            this.$slots.title && this.$slots.title(),
          ]),
          this.isTitleVisible && h("div", {
            ref: "titleRef",
            class: "a_tooltip__container",
            style: this.tooltipStyles,
            onMouseenter: this.mouseEnterTooltip,
            onMouseleave: this.mouseLeaveTooltip,
          }, [
            h("div", {
              class: "a_tooltip__wrapper",
            }, this.$slots.title && this.$slots.title()),
            h("div", {
              "data-popper-arrow": true,
              class: "a_tooltip__arrow",
            }),
          ]),
        ]),
      ],
    });
  },
};
