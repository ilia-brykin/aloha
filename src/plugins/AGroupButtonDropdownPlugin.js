import {
  ref,
} from "vue";

export const groupButtonDropdownPluginOptions = ref({
  propsDefault: {
    actionsClasses: ["a_btn a_btn_primary", "a_btn a_btn_secondary"],
    dropdownAttributes: {},
    hasDividerBeforeDropdown: true,
    indexFirstDropdownAction: 1,
    indexFirstDropdownActionMobile: 0,
    minDropdownActions: 2,
    useActionClass: true,
    useDropdownActionClass: false,
  },
});
export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    groupButtonDropdownPluginOptions.value.propsDefault = {
      ...groupButtonDropdownPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
