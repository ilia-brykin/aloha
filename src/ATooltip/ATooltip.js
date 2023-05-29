import {
  h,
  Teleport,
  withDirectives,
} from "vue";

import AOnHooks from "../directives/AOnHooks";

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
    arrowPadding: {
      type: [Number, Function],
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_tooltip_"),
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    maxWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    minWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    offsetDistance: {
      type: Number,
      required: false,
      default: 6,
    },
    offsetSkidding: {
      type: Number,
      required: false,
      default: 0,
    },
    placement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: "a_tooltip_container",
    },
    showArrow: {
      type: Boolean,
      required: false,
      default: true,
    },
    tag: {
      type: String,
      required: false,
      default: "span",
    },
    timeClose: {
      type: Number,
      required: false,
      default: 100,
      validator: value => value >= 0,
    },
    width: {
      type: Number,
      required: false,
      default: undefined,
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
      startPopper,
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
      startPopper,
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
          this.isTitleVisible && withDirectives(h("div", {
            ref: "titleRef",
            class: "a_tooltip__container",
            style: this.tooltipStyles,
            onMouseenter: this.mouseEnterTooltip,
            onMouseleave: this.mouseLeaveTooltip,
          }, [
            h("div", {
              class: "a_tooltip__wrapper",
            }, this.$slots.title && this.$slots.title()),
            this.showArrow && h("div", {
              "data-popper-arrow": true,
              class: "a_tooltip__arrow",
            }),
          ]), [
            [AOnHooks, {
              mounted: this.startPopper,
            }],
          ]),
        ]),
      ],
    });
  },
};
