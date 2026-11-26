import {
  computed,
  h,
  onMounted,
  ref,
  Teleport,
  toRef,
} from "vue";

import AElement from "../AElement/AElement";
import ATranslation from "../ATranslation/ATranslation";

import FloatingAPI from "./compositionAPI/FloatingAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import PopperContainerAPI from "../ATooltip/compositionAPI/PopperContainerAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import Close from "../AIcon/Icons/Close";
import placements from "../const/placements";
import {
  getPropDefault,
} from "../plugins/AComponentsPlugin";
import {
  uniqueId,
} from "lodash-es";

// the default can be set for all popovers: app.use(AComponentsPlugin, { APopover: { props: { hasArrow: false } } })
const plugin = (type, name, defaultValue) => ({
  type,
  required: false,
  default: () => getPropDefault("APopover", name, defaultValue),
});

export default {
  name: "APopover",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    buttonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    buttonClass: plugin([String, Object, Array], "buttonClass", "a_btn a_btn_secondary"),
    buttonIconLeft: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    buttonIconRight: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    buttonText: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    buttonTextScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    buttonTitle: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    closeDelay: plugin(Number, "closeDelay", 200),
    closeOnClickOutside: plugin(Boolean, "closeOnClickOutside", true),
    closeOnFocusOut: plugin(Boolean, "closeOnFocusOut", true),
    disabled: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    focusOnOpen: {
      type: String,
      required: false,
      default: () => getPropDefault("APopover", "focusOnOpen", "first"),
      validator: value => ["first", "popover", "none"].indexOf(value) !== -1,
    },
    hasArrow: plugin(Boolean, "hasArrow", true),
    hasCloseButton: plugin(Boolean, "hasCloseButton", true),
    header: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    headerTag: plugin(String, "headerTag", "div"),
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_popover_"),
    },
    inBody: plugin(Boolean, "inBody", true),
    modelValue: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    offset: plugin(Number, "offset", 8),
    openDelay: plugin(Number, "openDelay", 100),
    placement: {
      type: String,
      required: false,
      default: () => getPropDefault("APopover", "placement", "bottom"),
      validator: value => placements.indexOf(value) !== -1,
    },
    popoverAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    popoverClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: "a_tooltip_container",
    },
    trigger: {
      type: String,
      required: false,
      default: () => getPropDefault("APopover", "trigger", "click"),
      validator: value => ["click", "hover"].indexOf(value) !== -1,
    },
    useEscape: plugin(Boolean, "useEscape", true),
  },
  emits: [
    "close",
    "open",
    "update:modelValue",
  ],
  setup(props, context) {
    const id = toRef(props, "id");

    const buttonRef = ref(undefined);
    const popoverRef = ref(undefined);
    const arrowRef = ref(undefined);
    const isMounted = ref(false);

    const getButtonElement = () => buttonRef.value?.$el || buttonRef.value;

    const buttonId = computed(() => `${ id.value }_button`);
    const popoverId = computed(() => `${ id.value }_popover`);
    const headerId = computed(() => `${ id.value }_header`);

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    const {
      placementCurrent,
      startFloating,
      stopFloating,
    } = FloatingAPI(props, {
      arrowRef,
      getButtonElement,
      popoverRef,
    });

    const {
      isFocusInside,
      onKeydownTab,
      setFocusOnOpen,
      setFocusToButton,
    } = FocusAPI(props, {
      getButtonElement,
      popoverRef,
    });

    const {
      close,
      initOpen,
      isOpen,
      onButtonClick,
      onFocusout,
      onMouseenter,
      onMouseleave,
      open,
      toggle,
    } = ToggleAPI(props, context, {
      getButtonElement,
      isFocusInside,
      popoverRef,
      setFocusOnOpen,
      setFocusToButton,
      startFloating,
      stopFloating,
    });

    const closeByButton = () => close({ trigger: "close" });

    const onPopoverKeydown = $event => {
      if ($event.key === "Tab") {
        onKeydownTab($event, {
          close: () => {
            if (props.closeOnFocusOut) {
              close({ trigger: "focusout" });
            }
          },
        });
      }
    };

    onMounted(() => {
      isMounted.value = true;
      // a_popup_container: not inert behind an open AModal
      addPopperContainerInBody({ className: "a_popup_container" });
      initOpen();
    });

    context.expose({
      close,
      open,
      toggle,
    });

    return {
      arrowRef,
      buttonId,
      buttonRef,
      closeByButton,
      headerId,
      isMounted,
      isOpen,
      onButtonClick,
      onFocusout,
      onMouseenter,
      onMouseleave,
      onPopoverKeydown,
      placementCurrent,
      popoverId,
      popoverRef,
      popperContainerIdSelector,
    };
  },
  render() {
    const SLOT_PROPS = { close: this.closeByButton };
    const HAS_HEADER = !!(this.header || this.$slots.header);
    const HAS_NAME = this.buttonText || this.buttonTitle || this.$attrs["aria-label"] || this.$slots.button;

    const BUTTON = h(AElement, {
      ref: "buttonRef",
      ...this.$attrs,
      id: this.buttonId,
      alwaysTranslate: this.alwaysTranslate,
      "aria-controls": this.isOpen ? this.popoverId : undefined,
      "aria-expanded": this.isOpen ? "true" : "false",
      "aria-haspopup": "dialog",
      class: this.buttonClass,
      disabled: this.disabled,
      extra: this.extra,
      iconLeft: this.buttonIconLeft,
      iconRight: this.buttonIconRight,
      text: this.buttonText,
      // a button with only an icon needs a name
      textScreenReader: this.buttonTextScreenReader ?? (HAS_NAME ? undefined : "_A_POPOVER_BUTTON_"),
      title: this.buttonTitle,
      type: "button",
      ...this.buttonAttributes,
      onClick: this.onButtonClick,
      onFocusout: this.onFocusout,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
    }, this.$slots.button ? { default: () => this.$slots.button() } : undefined);

    // always the same root (a fragment): else the button is created again and loses the focus
    if (!this.isMounted || !this.isOpen) {
      return [BUTTON, null];
    }

    const POPOVER = h("div", {
      ref: "popoverRef",
      id: this.popoverId,
      // non-modal dialog: the page stays usable, no aria-modal
      role: "dialog",
      "aria-labelledby": HAS_HEADER ? this.headerId : this.buttonId,
      class: ["a_popover", this.popoverClass],
      "data-owner": this.id,
      "data-placement": this.placementCurrent,
      tabindex: -1,
      ...this.popoverAttributes,
      onFocusout: this.onFocusout,
      onKeydown: this.onPopoverKeydown,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
    }, [
      this.hasArrow ?
        h("div", {
          ref: "arrowRef",
          "aria-hidden": "true",
          class: "a_popover__arrow",
        }) :
        "",
      (HAS_HEADER || this.hasCloseButton) ?
        h("div", {
          class: ["a_popover__header", { a_popover__header_empty: !HAS_HEADER }],
        }, [
          HAS_HEADER ?
            h(this.headerTag, {
              id: this.headerId,
              class: "a_popover__title",
            }, this.$slots.header ?
              this.$slots.header(SLOT_PROPS) :
              [
                h(ATranslation, {
                  alwaysTranslate: this.alwaysTranslate,
                  extra: this.extra,
                  html: this.header,
                  tag: "span",
                }),
              ]) :
            "",
          this.hasCloseButton ?
            h(AElement, {
              alwaysTranslate: this.alwaysTranslate,
              class: "a_btn_close a_popover__close",
              iconLeft: Close,
              textScreenReader: "_A_POPOVER_CLOSE_",
              title: "_A_POPOVER_CLOSE_",
              type: "button",
              onClick: this.closeByButton,
            }) :
            "",
        ]) :
        "",
      h("div", {
        class: "a_popover__body",
      }, this.$slots.default?.(SLOT_PROPS)),
      this.$slots.footer ?
        h("div", {
          class: "a_popover__footer",
        }, this.$slots.footer(SLOT_PROPS)) :
        "",
    ]);

    return [
      BUTTON,
      h(Teleport, {
        to: this.popperContainerIdSelector,
        disabled: !this.inBody,
      }, [POPOVER]),
    ];
  },
};
