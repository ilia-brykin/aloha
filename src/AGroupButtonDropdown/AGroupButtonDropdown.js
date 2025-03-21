import {
  h,
  watch,
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
    actionsIds: {
      type: Array,
      required: false,
      default: () => [],
    },
    btnGroupClass: {
      type: [String, Array, Object],
      required: false,
      default: "a_btn_group",
    },
    disabled: {
      type: Boolean,
      required: false,
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
      validator: value => value >= -1,
    },
    indexFirstDropdownActionMobile: {
      type: Number,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.indexFirstDropdownActionMobile,
      validator: value => value >= -1,
    },
    minDropdownActions: {
      type: Number,
      required: false,
      default: () => groupButtonDropdownPluginOptions.value.propsDefault.minDropdownActions,
    },
    innerFlagHasActions: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "update:innerFlagHasActions",
  ],
  setup(props, { emit }) {
    const {
      actionsAllWithClassesFiltered,
      actionsGrouped,
      hasActionsAllFiltered,
      hasDropdownActions,
    } = ActionsAPI(props);

    watch(hasActionsAllFiltered, newValue => {
      emit("update:innerFlagHasActions", newValue);
    }, {
      immediate: true,
    });

    return {
      actionsAllWithClassesFiltered,
      actionsGrouped,
      hasActionsAllFiltered,
      hasDropdownActions,
    };
  },
  render() {
    if (this.hasActionsAllFiltered) {
      return h("div", {
        class: "aloha_group_btn_dropdown",
      }, [
        ...this.actionsGrouped.buttons.map((item, itemIndex) => {
          return h(AGroupButtonDropdownItem, {
            btnGroupClass: this.btnGroupClass,
            data: item,
            disabled: this.disabled,
            actionsDropdown: this.actionsGrouped.dropdown,
            hasDropdownActions: this.hasDropdownActions,
            dropdownAttributes: this.dropdownAttributes,
            actionsClasses: this.actionsClasses,
            actionsIds: this.actionsIds,
            isLast: itemIndex === this.actionsGrouped.buttons.length - 1,
            hasDividerBeforeDropdown: this.hasDividerBeforeDropdown,
          }, this.$slots);
        }),
      ]);
    }
  },
};
