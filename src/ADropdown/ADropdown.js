import {
  h,
  onBeforeUnmount,
  Teleport,
} from "vue";

import AButton from "../AButton/AButton";
import ADropdownAction from "./ADropdownAction/ADropdownAction";
import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import ActionsAPI from "./compositionAPI/ActionsAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";
import PopperContainerAPI from "../ATooltip/compositionAPI/PopperContainerAPI";
import RefsAPI from "./compositionAPI/RefsAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import placements from "../const/placements";
import {
  uniqueId,
} from "lodash-es";


export default {
  name: "ADropdown",
  inheritAttrs: false,
  components: {
    ATranslation,
  },
  props: {
    actions: {
      type: Array,
      required: false,
      default: () => [],
    },
    isHideWithoutActionAndSlot: {
      type: Boolean,
      required: false,
      default: true,
    },
    buttonAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    buttonText: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    buttonTextScreenReader: {
      type: String,
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
    buttonClass: {
      type: [String, Object],
      required: false,
      default: "a_btn a_btn_secondary dropdown_button",
    },
    buttonTag: {
      type: String,
      required: false,
      default: "button",
    },
    buttonTitle: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonIsTitleHtml: {
      type: Boolean,
      required: false,
    },
    buttonTitlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: value => ["top", "left", "bottom", "right"].indexOf(value) !== -1,
    },
    buttonLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonLoadingClass: {
      type: [String, Object],
      required: false,
      default: "a_spinner_small",
    },
    buttonLoadingAlign: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    buttonIconLeft: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonIconRight: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonIconClass: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonIconAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    buttonIconTag: {
      type: String,
      required: false,
      default: undefined,
    },
    buttonPrevent: {
      type: Boolean,
      required: false,
    },
    buttonStop: {
      type: Boolean,
      required: false,
    },
    extraTranslate: {
      type: Object,
      required: false,
      default: undefined,
    },
    classForTooltipInner: {
      type: [String, Object],
      required: false,
      default: "a_position_relative p-0 font_family_inherit",
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
    dropdownTag: {
      type: String,
      required: false,
      default: "ul",
    },
    elementsForArrows: {
      type: String,
      required: false,
      default: "button:not([disabled]), input:not([disabled]), a",
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_dropdown_btn_"),
    },
    inBody: {
      type: Boolean,
      required: false,
    },
    isCaret: {
      type: Boolean,
      required: false,
      default: true,
    },
    isCloseByClickInside: {
      type: Boolean,
      required: false,
      default: true,
    },
    isListWidthSameWithButton: {
      type: Boolean,
      required: false,
    },
    isRenderDefault: {
      type: Boolean,
      required: false,
      default: false,
    },
    menuWidth: {
      type: Number,
      required: false,
      default: undefined,
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
      default: "div",
    },
    useActionClass: {
      type: Boolean,
      required: false,
      default: false,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: "a_tooltip_container",
    },
  },
  setup(props) {
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
      openPopoverWithPopperjs,
    } = PopoverAPI(props, {
      dropdownButtonRef,
      dropdownRef,
    });

    const {
      buttonWidth,
      destroyEventCloseClick,
      destroyEventPressArrows,
      onKeydown,
      onToggle,
      statusExpanded,
    } = ToggleAPI(props, {
      dropdownButtonRef,
      dropdownRef,
      openPopoverWithPopperjs,
      destroyPopover,
      setFocusToFirstElement,
    });

    const {
      idLocal,
      buttonAttributesDisabled,
      buttonAttributesLocal,
      dropdownAttributesLocal,
      isMenuRendered,
    } = AttributesAPI(props, {
      statusExpanded,
      onToggle,
      onKeydown,
    });

    const {
      actionsFiltered,
      hasActions,
    } = ActionsAPI(props);

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    addPopperContainerInBody();

    onBeforeUnmount(() => {
      destroyEventCloseClick();
      destroyEventPressArrows();
      destroyPopover();
    });

    return {
      actionsFiltered,
      buttonAttributesDisabled,
      buttonAttributesLocal,
      buttonWidth,
      dropdownAttributesLocal,
      dropdownButtonRef,
      dropdownRef,
      hasActions,
      idLocal,
      isMenuRendered,
      onKeydown,
      onToggle,
      popperContainerIdSelector,
      statusExpanded,
    };
  },
  render() {
    if (this.isHideWithoutActionAndSlot &&
      !this.hasActions && 
      !this.$slots.dropdown) {
      return "";
    }
    return [
      h(AButton, {
        ref: "dropdownButtonRef",
        ...this.$attrs,
        id: this.idLocal,
        tag: this.buttonTag,
        class: this.buttonClass,
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
        extraTranslate: this.extraTranslate,
        attributes: this.buttonAttributesLocal,
        ...this.buttonAttributesDisabled,
        onClick: this.onToggle,
        onKeydown: this.onKeydown,
      }, {
        default: () => {
          return this.$slots.button && this.$slots.button();
        },
        buttonAppend: () => {
          return this.isCaret && h(AIcon, {
            class: "a_dropdown__caret",
            icon: "ChevronDown",
          });
        },
      }),
      h(Teleport, {
        to: this.popperContainerIdSelector,
      }, [
        this.isMenuRendered && h(
          this.dropdownTag,
          this.dropdownAttributesLocal,
          [
            this.$slots.dropdown && this.$slots.dropdown(),
            this.hasActions && this.actionsFiltered.map((action, actionIndex) => {
              return h(ADropdownAction, {
                key: actionIndex,
                action,
                useActionClass: this.useActionClass,
              }, this.$slots);
            }),
          ],
        ),
      ]),
    ];
  },
};
