import {
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  Teleport,
  toRef,
  watch,
  withDirectives,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import DescribedbyAPI from "./compositionAPI/DescribedbyAPI";
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
      type: [Number, String],
      required: false,
      default: undefined,
    },
    minWidth: {
      type: [Number, String],
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
    // delay in ms before the tooltip opens on mouse hover, e.g. 300 against flickering; the focus opens it at once
    timeOpen: {
      type: Number,
      required: false,
      default: 0,
      validator: value => value >= 0,
    },
    timeClose: {
      type: Number,
      required: false,
      default: 100,
      validator: value => value >= 0,
    },
    // a number is in px, a string is used as it is ("20rem")
    width: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
    withoutAriaDescribedby: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const isMounted = ref(false);

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
      clearTimerOpen,
      focusedElement,
      onFocusin,
      onFocusout,
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
      titleId,
      tooltipStyles,
    } = AttributesAPI(props);

    DescribedbyAPI(props, {
      componentRef,
      focusedElement,
      isTitleVisible,
      titleId,
    });

    // is-hide closes an open tooltip too
    const isHide = toRef(props, "isHide");
    watch(isHide, value => {
      if (value) {
        clearTimerOpen();
        closeTitle();
      }
    });

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    onMounted(() => {
      isMounted.value = true;
      addPopperContainerInBody();
    });

    onBeforeUnmount(() => {
      clearTimerOpen();
      closeTitle();
    });

    return {
      closeTitle,
      componentRef,
      isMounted,
      isTitleVisible,
      mouseEnterTooltip,
      mouseLeaveTooltip,
      onFocusin,
      onFocusout,
      onMouseenter,
      onMouseleave,
      showTitle,
      popperContainerIdSelector,
      startPopper,
      tagLocal,
      titleArrowRef,
      titleId,
      titleRef,
      tooltipStyles,
    };
  },
  render() {
    if (!this.isMounted) {
      return null;
    }

    return h(this.tagLocal, {
      ref: "componentRef",
      id: this.id,
      onFocusin: this.onFocusin,
      onFocusout: this.onFocusout,
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
              id: this.titleId,
              class: "a_tooltip__wrapper",
              role: "tooltip",
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
