import {
  h,
  watch,
} from "vue";

import AGroupButtonDropdownItem from "./AGroupButtonDropdownItem/AGroupButtonDropdownItem";

import ActionsAPI from "./compositionAPI/ActionsAPI";

import {
  getPropDefault,
} from "../plugins/APropsDefaultPlugin";

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
      default: () => getPropDefault("AGroupButtonDropdown", "actionsClasses", ["a_btn a_btn_primary", "a_btn a_btn_secondary"]),
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
      default: () => getPropDefault("AGroupButtonDropdown", "dropdownAttributes", {}),
    },
    hasDividerBeforeDropdown: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AGroupButtonDropdown", "hasDividerBeforeDropdown", true),
    },
    indexFirstDropdownAction: {
      type: Number,
      required: false,
      default: () => getPropDefault("AGroupButtonDropdown", "indexFirstDropdownAction", 1),
      validator: value => value >= -1,
    },
    indexFirstDropdownActionMobile: {
      type: Number,
      required: false,
      default: () => getPropDefault("AGroupButtonDropdown", "indexFirstDropdownActionMobile", 0),
      validator: value => value >= -1,
    },
    minDropdownActions: {
      type: Number,
      required: false,
      default: () => getPropDefault("AGroupButtonDropdown", "minDropdownActions", 2),
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
        class: "a_group_btn_dropdown",
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
