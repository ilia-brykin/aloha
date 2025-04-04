import {
  h,
  onBeforeUnmount,
  Teleport,
  withDirectives,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import PopperAPI from "./compositionAPI/PopperAPI";
import PopperContainerAPI from "./compositionAPI/PopperContainerAPI";
import TagAPI from "./compositionAPI/TagAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import AOnHooks from "../directives/AOnHooks";
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
    withoutAriaDescribedby: {
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
      startPopper,
      titleArrowRef,
      titleRef,
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
    } = AttributesAPI(props, {
      isTitleVisible,
    });

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    addPopperContainerInBody();

    onBeforeUnmount(() => {
      closeTitle();
    });

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
      titleArrowRef,
      titleRef,
      tooltipStyles,
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
          /*
           * h("div", {
           *   id: this.ariaDescribedby,
           *   class: "a_sr_only",
           * }, [
           *   this.$slots.title && this.$slots.title(),
           * ]),
           */
          !!(this.$slots.title && this.isTitleVisible) && withDirectives(h("div", {
            ref: "titleRef",
            class: "a_tooltip__container",
            style: this.tooltipStyles,
            onMouseenter: this.mouseEnterTooltip,
            onMouseleave: this.mouseLeaveTooltip,
          }, [
            this.showArrow && h("div", {
              ref: "titleArrowRef",
              "data-popper-arrow": true,
              class: "a_tooltip__arrow",
            }),
            h("div", {
              id: this.ariaDescribedby,
              class: "a_tooltip__wrapper",
            }, this.$slots.title && this.$slots.title()),
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
