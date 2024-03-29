import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ADropdown from "../../ADropdown/ADropdown";
import ALink from "../../ALink/ALink";

import DropdownAPI from "./compositionAPI/DropdownAPI";

export default {
  name: "AGroupButtonDropdownItem",
  props: {
    actionsClasses: {
      type: Array,
      required: true,
    },
    actionsDropdown: {
      type: Array,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    dropdownAttributes: {
      type: Object,
      required: true,
    },
    hasDividerBeforeDropdown: {
      type: Boolean,
      required: true,
    },
    hasDropdownActions: {
      type: Boolean,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const {
      isDropdownActionsAfterGroup,
      isDropdownActionsInGroup,
    } = DropdownAPI(props);

    return {
      isDropdownActionsAfterGroup,
      isDropdownActionsInGroup,
    };
  },
  render() {
    return [
      !!this.data.children.length && h("div", {
        class: "a_btn_group",
      }, [
        ...this.data.children.map(action => {
          const CLASS = action.classButton ? action.classButton : this.actionsClasses[action.actionNotDividerIndex];
          const DISABLED = this.disabled || action.disabled;
          if (action.type === "button") {
            return h(AButton, {
              ...action,
              class: CLASS,
              classButton: undefined,
              disabled: DISABLED,
              onClick: action.callback,
              callback: undefined,
              actionNotDividerIndex: undefined,
              isHidden: undefined,
            });
          }
          if (action.type === "link") {
            return h(ALink, {
              ...action,
              classButton: undefined,
              disabled: DISABLED,
              class: CLASS,
              actionNotDividerIndex: undefined,
              isHidden: undefined,
              type: undefined,
            });
          }
          if (action.type === "template" &&
            action.slotName &&
            this.$slots[action.slotName]) {
            return this.$slots[action.slotName]({
              class: CLASS,
              action: action,
            });
          }
        }),
        this.isDropdownActionsInGroup && h(ADropdown, {
          isHideWithoutActionAndSlot: true,
          actions: this.actionsDropdown,
          disabled: this.disabled,
          ...this.dropdownAttributes,
        }, this.$slots),
      ]),
      this.isDropdownActionsAfterGroup && h(ADropdown, {
        isHideWithoutActionAndSlot: true,
        actions: this.actionsDropdown,
        disabled: this.disabled,
        ...this.dropdownAttributes,
      }, this.$slots),
    ];
  },
};
