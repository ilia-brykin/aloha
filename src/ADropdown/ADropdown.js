import {
  h,
  onBeforeUnmount,
  onMounted,
  Teleport,
  toRef,
  withDirectives,
} from "vue";
import {
  AElement,
  AIcon,
  AOnHooks,
  APlacements,
  focusableSelector,
} from "../index";

import ADropdownAction from "./ADropdownAction/ADropdownAction";

import APopupAPI from "../compositionAPI/APopupAPI";
import ActionsAPI from "./compositionAPI/ActionsAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";
import PopperContainerAPI from "../ATooltip/compositionAPI/PopperContainerAPI";
import RefsAPI from "./compositionAPI/RefsAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import ChevronDown from "aloha-svg/dist/js/bootstrap/ChevronDown";
import {
  difference,
  uniqueId,
} from "lodash-es";

export default {
  name: "ADropdown",
  inheritAttrs: false,
  props: {
    actions: {
      type: Array,
      required: false,
      default: () => [],
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    buttonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    buttonClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary",
    },
    buttonIconAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    buttonIconClass: {
      type: String,
      required: false,
      default: undefined,
    },
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
    buttonIconTag: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonIsTitleHtml: {
      type: Boolean,
      required: false,
    },
    buttonLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonLoadingAlign: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    buttonLoadingClass: {
      type: [String, Object],
      required: false,
      default: "a_spinner_small",
    },
    buttonPrevent: {
      type: Boolean,
      required: false,
    },
    buttonStop: {
      type: Boolean,
      required: false,
    },
    buttonTag: {
      type: String,
      required: false,
      default: "button",
    },
    buttonText: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    buttonTextAriaHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonTextClass: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonTextScreenReader: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    buttonTitle: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    buttonTitlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: value => ["top", "left", "bottom", "right"].indexOf(value) !== -1,
    },
    caretIcon: {
      type: String,
      required: false,
      default: ChevronDown,
    },
    class: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    dropdownAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    dropdownClass: {
      type: String,
      required: false,
      default: undefined,
    },
    dropdownRenderDefault: {
      type: Boolean,
      required: false,
    },
    dropdownTag: {
      type: String,
      required: false,
      default: "ul",
    },
    elementsForArrows: {
      type: String,
      required: false,
      default: focusableSelector,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    floatingFlip: {
      type: Object,
      required: false,

      /*
       * mainAxis?: boolean;
       * crossAxis?: boolean;
       * fallbackAxisSideDirection?: 'none' | 'start' | 'end';
       * flipAlignment?: boolean;
       * fallbackPlacements?: Array<Placement>;
       * fallbackStrategy?: 'bestFit' | 'initialPlacement';
       */
      default: () => ({}),
    },
    floatingShift: {
      type: Object,
      required: false,
      default: () => ({
        use: true,
        crossAxis: true,
        padding: 20,
      }),
    },
    hasCaret: {
      type: Boolean,
      required: false,
      default: true,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_dropdown_btn_"),
    },
    inBody: {
      type: Boolean,
      required: false,
      default: false,
    },
    isCloseByClickInside: {
      type: Boolean,
      required: false,
      default: true,
    },
    isCloseByClickOutside: {
      type: Boolean,
      required: false,
      default: true,
    },
    isHideWithoutActionAndSlot: {
      type: Boolean,
      required: false,
      default: true,
    },
    isListWidthSameWithButton: {
      type: Boolean,
      required: false,
    },
    lockArrowsNavigation: {
      type: Boolean,
      required: false,
      default: true,
    },
    lockTabNavigation: {
      type: Boolean,
      required: false,
      default: true,
    },
    menuWidth: {
      type: Number,
      required: false,
      default: undefined,
    },
    persist: {
      type: Boolean,
      required: false,
      default: true,
    },
    placement: {
      type: String,
      required: false,
      default: "bottom-start",
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: "a_tooltip_container",
    },
    triggers: {
      type: Array,
      required: false,
      default: () => ["click"],
      validator: value => difference(value, ["click", "hover", "focus"]).length === 0,
    },
    useEscape: {
      type: Boolean,
      required: false,
      default: true,
    },
    useRem: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: [
    "open",
    "close",
  ],
  setup(props, context) {
    const id = toRef(props, "id");

    const {
      closePopup,
      openPopup,
    } = APopupAPI();

    const {
      dropdownButtonRef,
      dropdownRef,
    } = RefsAPI();

    const {
      setFocusToFirstElement,
    } = FocusAPI(props, {
      dropdownRef,
    });

    const {
      destroyPopover,
      startPopper,
    } = PopoverAPI(props, {
      dropdownButtonRef,
      dropdownRef,
    });

    const {
      buttonWidth,
      destroyEventCloseClick,
      destroyEventPressArrows,
      initWasOpened,
      onClose,
      onKeydown,
      onOpen,
      onToggle,
      statusExpanded,
      timerCloseHover,
      triggerOpen,
      wasOpened,
    } = ToggleAPI(props, context, {
      closePopup,
      destroyPopover,
      dropdownButtonRef,
      dropdownRef,
      openPopup,
      setFocusToFirstElement,
      startPopper,
    });

    const {
      eventsLocal,
      eventsMenu,
    } = EventsAPI(props, {
      onToggle,
      onKeydown,
      onOpen,
      onClose,
      timerCloseHover,
      triggerOpen,
    });

    const {
      idLocal,
      buttonAttributesDisabled,
      buttonAttributesLocal,
      dropdownAttributesLocal,
      isMenuRendered,
    } = AttributesAPI(props, {
      eventsMenu,
      statusExpanded,
      wasOpened,
    });

    const {
      actionsFiltered,
      hasActions,
    } = ActionsAPI(props);

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    const {
      buttonClassLocal,
    } = ClassAPI(props);

    initWasOpened();

    onMounted(() => {
      addPopperContainerInBody();
    });

    onBeforeUnmount(() => {
      destroyEventCloseClick();
      destroyEventPressArrows();
      destroyPopover();
      closePopup({
        id: id.value,
      });
    });

    return {
      actionsFiltered,
      buttonAttributesDisabled,
      buttonAttributesLocal,
      buttonClassLocal,
      buttonWidth,
      dropdownAttributesLocal,
      dropdownButtonRef,
      dropdownRef,
      eventsLocal,
      hasActions,
      idLocal,
      isMenuRendered,
      onClose,
      onOpen,
      popperContainerIdSelector,
      startPopper,
      statusExpanded,
    };
  },
  render() {
    if (this.isHideWithoutActionAndSlot &&
      !this.hasActions &&
      !this.$slots.dropdown) {
      return null;
    }
    return [
      h(AElement, {
        ref: "dropdownButtonRef",
        ...this.$attrs,
        id: this.idLocal,
        alwaysTranslate: this.alwaysTranslate,
        tag: this.buttonTag,
        class: this.buttonClassLocal,
        text: this.buttonText,
        textScreenReader: this.buttonTextScreenReader,
        textAriaHidden: this.buttonTextAriaHidden,
        textClass: this.buttonTextClass,
        title: this.buttonTitle,
        isTitleHtml: this.buttonIsTitleHtml,
        titlePlacement: this.buttonTitlePlacement,
        loading: this.buttonLoading,
        loadingClass: this.buttonLoadingClass,
        loadingAlign: this.buttonLoadingAlign,
        iconLeft: this.buttonIconLeft,
        iconRight: this.buttonIconRight,
        iconClass: this.buttonIconClass,
        iconAttributes: this.buttonIconAttributes,
        iconTag: this.buttonIconTag,
        prevent: this.buttonPrevent,
        stop: this.buttonStop,
        extra: this.extra,
        type: "button",
        attributes: this.buttonAttributesLocal,
        ...this.buttonAttributesDisabled,
        ...this.eventsLocal,
      }, {
        default: () => {
          return this.$slots.button && this.$slots.button();
        },
        buttonAppend: () => {
          return this.hasCaret && h(AIcon, {
            class: "a_dropdown__caret",
            icon: this.caretIcon,
          });
        },
      }),
      h(Teleport, {
        to: this.popperContainerIdSelector,
        disabled: !this.inBody,
      }, [
        this.isMenuRendered && withDirectives(h(
          "div",
          {
            ref: "dropdownRef",
            role: "application",
            "aria-labelledby": this.idLocal,
            ariaHidden: !this.statusExpanded,
            ...this.dropdownAttributesLocal,
          },
          [
            h(this.dropdownTag, {}, [
              this.$slots.dropdown && this.$slots.dropdown(),
              this.hasActions && this.actionsFiltered.map((action, actionIndex) => {
                return h(ADropdownAction, {
                  key: actionIndex,
                  action,
                  alwaysTranslate: this.alwaysTranslate,
                }, this.$slots);
              }),
            ]),
          ],
        ), [
          [AOnHooks, {
            mounted: this.startPopper,
          }],
        ]),
      ]),
    ];
  },
};
