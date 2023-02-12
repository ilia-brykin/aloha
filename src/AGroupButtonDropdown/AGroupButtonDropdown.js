import {
  h,
} from "vue";

import AGroupButtonDropdownItem from "./AGroupButtonDropdownItem/AGroupButtonDropdownItem";

import ActionsAPI from "./compositionAPI/ActionsAPI";
import {
  groupButtonDropdownPluginOptions,
} from "../plugins/AGroupButtonDropdownPlugin";

export default {
  name: "AGroupButtonDropdown",
  props: {
    actions: {
      type: Array,
      required: false,
      default: () => [],
    },
    actionsClasses: {
      type: Array,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.actionsClasses,
    },
    dropdownAttributes: {
      type: Object,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.dropdownAttributes,
    },
    hasDividerBeforeDropdown: {
      type: Boolean,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.hasDividerBeforeDropdown,
    },
    indexFirstDropdownAction: {
      type: Number,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.indexFirstDropdownAction,
      validator: value => value > -1,
    },
    indexFirstDropdownActionMobile: {
      type: Number,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.indexFirstDropdownActionMobile,
      validator: value => value > -1,
    },
    minDropdownActions: {
      type: Number,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.minDropdownActions,
    },
  },
  setup(props) {
    const {
      actionsAllFiltered,
      actionsGrouped,
      hasDropdownActions,
    } = ActionsAPI(props);

    return {
      actionsAllFiltered,
      actionsGrouped,
      hasDropdownActions,
    };
  },
  render() {
    if (this.actionsAllFiltered.length) {
      return h("div", {
        class: "aloha_group_btn_dropdown",
      }, [
        ...this.actionsGrouped.buttons.map((item, itemIndex) => {
          return h(AGroupButtonDropdownItem, {
            data: item,
            actionsDropdown: this.actionsGrouped.dropdown,
            hasDropdownActions: this.hasDropdownActions,
            dropdownAttributes: this.dropdownAttributes,
            actionsClasses: this.actionsClasses,
            isLast: itemIndex === this.actionsGrouped.buttons.length - 1,
            hasDividerBeforeDropdown: this.hasDividerBeforeDropdown,
          }, this.$slots);
        }),
      ]);
    }
  },
};
