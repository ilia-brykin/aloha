import {
  computed,
  h,
  inject,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  provide,
  ref,
  Teleport,
  toRef,
  watch,
} from "vue";

import AElement from "../AElement/AElement";
import ATranslation from "../ATranslation/ATranslation";

import AMobileAPI from "../compositionAPI/AMobileAPI";
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
  isDev,
} from "../utils/isDev";
import {
  isNil,
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
    // the popup closes when the button / the field is scrolled out of the view
    isCloseByButtonInvisibleInViewport: plugin(Boolean, "isCloseByButtonInvisibleInViewport", true),
    isBottomSheetOnMobile: plugin(Boolean, "isBottomSheetOnMobile", true),
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
    // undefined: the token --a_popover_z_index (above modals)
    zIndex: plugin([Number, String], "zIndex", undefined),
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

    const buttonId = computed(() => `${ id.value }_button`);
    // the own trigger of the slot trigger has the id of the button
    const getButtonElement = () => buttonRef.value?.$el || buttonRef.value || document.getElementById(buttonId.value);

    const {
      isMobileWidth,
    } = AMobileAPI();
    // AMobilePlugin: on a small screen the popover is a panel at the bottom of the window
    const isSheet = computed(() => !!(props.isBottomSheetOnMobile && isMobileWidth.value));
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
      isSheet,
      onReferenceHidden: () => closeByReferenceHidden(),
      popoverRef,
    });

    const {
      children,
      isFocusInside,
      onKeydownTab,
      onKeydownTrap,
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
      isSheet,
      popoverRef,
      setFocusOnOpen,
      setFocusToButton,
      startFloating,
      stopFloating,
    });

    const closeByButton = () => close({ trigger: "close" });

    // the button is scrolled out of the view: close, the focus back to the button without a scroll of the page
    function closeByReferenceHidden() {
      const IS_FOCUS_INSIDE = !!popoverRef.value?.contains(document.activeElement);
      close({ trigger: "referenceHidden" });
      if (IS_FOCUS_INSIDE) {
        getButtonElement()?.focus?.({ preventScroll: true });
      }
    }

    // nested popovers: the focus and the clicks in a child popover count as inside
    const parent = inject("aPopover", undefined);
    provide("aPopover", {
      addChild: fn => children.add(fn),
      removeChild: fn => children.delete(fn),
    });
    parent?.addChild(isFocusInside);
    onBeforeUnmount(() => parent?.removeChild(isFocusInside));

    // the window became small or large while the popover is open
    watch(isSheet, () => {
      if (isOpen.value) {
        startFloating();
      }
    }, { flush: "post" });

    // the prop sets the token, so the popover and the backdrop of the bottom sheet use it
    const zIndexStyle = computed(() => {
      return isNil(props.zIndex) ? undefined : { "--a_popover_z_index": props.zIndex };
    });

    // a button and a link with href have Enter (and Space) natively
    const hasNativeKeyboard = element => {
      return element.tagName === "BUTTON" || (element.tagName === "A" && element.hasAttribute("href"));
    };

    // Enter and Space for an own element that is no button (div, span)
    const onTriggerKeydown = $event => {
      if (hasNativeKeyboard($event.currentTarget) || ($event.key !== "Enter" && $event.key !== " ")) {
        return;
      }
      $event.preventDefault();
      onButtonClick();
    };

    // the attributes and events for an own element in the slot trigger
    const triggerAttributes = computed(() => ({
      id: buttonId.value,
      "aria-controls": isOpen.value ? popoverId.value : undefined,
      "aria-expanded": isOpen.value ? "true" : "false",
      "aria-haspopup": "dialog",
      onClick: onButtonClick,
      onFocusout,
      onKeydown: onTriggerKeydown,
      onMouseenter,
      onMouseleave,
    }));

    /**
     * An own element that is no button gets role button and tabindex 0, so the keyboard and the screen reader can use it.
     * A link with href is not changed: a link goes to another page, the popover needs a button.
     */
    const prepareTrigger = () => {
      if (!context.slots.trigger) {
        return;
      }
      const ELEMENT = document.getElementById(buttonId.value);
      if (!ELEMENT || ELEMENT.tagName === "BUTTON" || ELEMENT.hasAttribute("data-a-popover-trigger")) {
        return;
      }
      ELEMENT.setAttribute("data-a-popover-trigger", "");
      if (hasNativeKeyboard(ELEMENT)) {
        if (isDev()) {
          console.warn(`APopover "${ id.value }": the trigger is a link, use a button (a link goes to another page).`);
        }
        return;
      }
      if (!ELEMENT.hasAttribute("role")) {
        ELEMENT.setAttribute("role", "button");
      }
      if (!ELEMENT.hasAttribute("tabindex")) {
        ELEMENT.setAttribute("tabindex", "0");
      }
      if (isDev()) {
        console.warn(`APopover "${ id.value }": the trigger <${ ELEMENT.tagName.toLowerCase() }> got role="button" and tabindex="0", use a <button>.`);
      }
    };

    const onPopoverKeydown = $event => {
      if ($event.key === "Tab" && isSheet.value) {
        onKeydownTrap($event);
      } else if ($event.key === "Tab") {
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
      prepareTrigger();
    });
    // the own trigger can be replaced (v-if)
    onUpdated(prepareTrigger);

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
      isSheet,
      onButtonClick,
      onFocusout,
      onMouseenter,
      onMouseleave,
      onPopoverKeydown,
      placementCurrent,
      popoverId,
      popoverRef,
      popperContainerIdSelector,
      triggerAttributes,
      zIndexStyle,
    };
  },
  render() {
    const SLOT_PROPS = { close: this.closeByButton };
    const HAS_HEADER = !!(this.header || this.$slots.header);
    const HAS_NAME = this.buttonText || this.buttonTitle || this.$attrs["aria-label"] || this.$slots.button;

    const BUTTON = this.$slots.trigger ?
      this.$slots.trigger({
        attributes: this.triggerAttributes,
        close: this.closeByButton,
        isOpen: this.isOpen,
      }) :
      h(AElement, {
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
      // the bottom sheet covers the page: modal, the rest of the page is inert
      "aria-modal": this.isSheet ? "true" : undefined,
      "aria-labelledby": HAS_HEADER ? this.headerId : this.buttonId,
      class: ["a_popover", { a_popover_sheet: this.isSheet }, this.popoverClass],
      "data-owner": this.id,
      "data-placement": this.isSheet ? undefined : this.placementCurrent,
      style: this.zIndexStyle,
      tabindex: -1,
      ...this.popoverAttributes,
      onFocusout: this.onFocusout,
      onKeydown: this.onPopoverKeydown,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
    }, [
      (this.hasArrow && !this.isSheet) ?
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
      // the bottom sheet is always in body: position fixed does not work in a parent with transform
      h(Teleport, {
        to: this.popperContainerIdSelector,
        disabled: !this.inBody && !this.isSheet,
      }, [
        this.isSheet ?
          h("div", {
            "aria-hidden": "true",
            class: "a_popover__backdrop",
            style: this.zIndexStyle,
          }) :
          null,
        POPOVER,
      ]),
    ];
  },
};
