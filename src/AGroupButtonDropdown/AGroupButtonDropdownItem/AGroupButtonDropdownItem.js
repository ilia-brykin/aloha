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
              disabled: DISABLED,
              onClick: action.callback,
              callback: undefined,
              actionnotdividerindex: undefined,
            });
          }
          if (action.type === "link") {
            return h(ALink, {
              ...action,
              disabled: DISABLED,
              class: CLASS,
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
          useActionClass: this.useDropdownActionClass,
          disabled: this.disabled,
          ...this.dropdownAttributes,
        }, this.$slots),
      ]),
      this.isDropdownActionsAfterGroup && h(ADropdown, {
        isHideWithoutActionAndSlot: true,
        actions: this.actionsDropdown,
        disabled: this.disabled,
        useActionClass: this.useDropdownActionClass,
        ...this.dropdownAttributes,
      }, this.$slots),
    ];
  },
};
