import {
  h, onBeforeUnmount,
  Teleport,
} from "vue";

import ADropdownAction from "./ADropdownAction/ADropdownAction";
import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import ActionsAPI from "./compositionAPI/ActionsAPI";
import AttributesAPI from "./compositionAPI/AttributesAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";
import RefsAPI from "./compositionAPI/RefsAPI";
import ToggleAPI from "./compositionAPI/ToggleAPI";

import placements from "../const/placements";
import {
  uniqueId,
} from "lodash-es";


export default {
  name: "ADropdown",
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

    onBeforeUnmount(() => {
      destroyEventCloseClick();
      destroyEventPressArrows();
      destroyPopover();
    });

    return {
      actionsFiltered,
      buttonAttributesLocal,
      buttonWidth,
      dropdownAttributesLocal,
      dropdownButtonRef,
      dropdownRef,
      hasActions,
      isMenuRendered,
    };
  },
  render() {
    if (this.isHideWithoutActionAndSlot &&
      !this.hasActions && 
      !this.$slots.dropdown) {
      return "";
    }
    return h(
      this.tag,
      {
        class: "a_dropdown",
      },
      [
        h(this.buttonTag, this.buttonAttributesLocal, [
          this.$slots.button && this.$slots.button(),
          this.isCaret && h(AIcon, {
            class: "a_dropdown__caret",
            icon: "ChevronDown",
          }),
        ]),
        h(Teleport, {
          to: "body",
        }, [
          this.isMenuRendered && h("div", null, [
            h(
              this.dropdownTag,
              this.dropdownAttributesLocal,
              [
                this.$slots.dropdown && this.$slots.dropdown(),
                this.hasActions && this.actionsFiltered.map((action, actionIndex) => {
                  return h(ADropdownAction, {
                    key: actionIndex,
                    action,
                  }, this.$slots);
                }),
              ],
            ),
          ]),
        ]),
      ],
    );
  },
};
