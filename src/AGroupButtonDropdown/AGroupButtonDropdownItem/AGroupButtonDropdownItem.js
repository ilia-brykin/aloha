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
    data: {
      type: Object,
      required: true,
    },
    actionsDropdown: {
      type: Array,
      required: true,
    },
    hasDropdownActions: {
      type: Boolean,
      required: true,
    },
    dropdownAttributes: {
      type: Object,
      required: true,
    },
    isLast: {
      type: Boolean,
      required: true,
    },
    actionsClasses: {
      type: Array,
      required: true,
    },
    hasDividerBeforeDropdown: {
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
      h("div", {
        class: "a_btn_group",
      }, [
        ...this.data.children.map(action => {
          if (action.type === "button") {
            return h(AButton, {
              class: this.actionsClasses[action.actionNotDividerIndex],
              ...action,
              onClick: action.callback,
            });
          }
          if (action.type === "link") {
            return h(ALink, action);
          }
          if (action.type === "template" &&
            action.slotName &&
            this.$slots[action.slotName]) {
            return this.$slots[action.slotName]({
              action: action,
            });
          }
        }),
        this.isDropdownActionsInGroup && h(ADropdown, {
          isHideWithoutActionAndSlot: true,
          actions: this.actionsDropdown,
          ...this.dropdownAttributes,
        }, this.$slots),
      ]),
      this.isDropdownActionsAfterGroup && h(ADropdown, {
        isHideWithoutActionAndSlot: true,
        actions: this.actionsDropdown,
        ...this.dropdownAttributes,
      }, this.$slots),
    ];
  },
};
