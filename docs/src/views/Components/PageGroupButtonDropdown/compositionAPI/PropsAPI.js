export default function PropsAPI() {
  const dataProps = [
    {
      name: "actions",
      description: "_A_DROPDOWN_PROPS_ACTIONS_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "actions-classes",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_ACTIONS_CLASSES_DESCRIPTION_",
      type: "Array",
      default: "() => [\"a_btn a_btn_primary\", \"a_btn a_btn_secondary\"]",
      required: false,
    },
    {
      name: "actions-ids",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_ACTIONS_IDS_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "btn-group-class",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_BTN_GROUP_CLASS_DESCRIPTION_",
      type: "String / Array / Object",
      default: "a_btn_group",
      required: false,
    },
    {
      name: "disabled",
      description: "_A_DROPDOWN_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "dropdown-attributes",
      description: "_A_DROPDOWN_PROPS_DROPDOWN_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "has-divider-before-dropdown",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_HAS_DIVIDER_BEFORE_DROPDOWN_DESCRIPTION_",
      type: "Boolean",
      default: "true",
      required: false,
    },
    {
      name: "index-first-dropdown-action",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_INDEX_FIRST_DROPDOWN_ACTION_DESCRIPTION_",
      type: "Number",
      default: "1",
      required: false,
    },
    {
      name: "index-first-dropdown-action-mobile",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_INDEX_FIRST_DROPDOWN_ACTION_MOBILE_DESCRIPTION_",
      type: "Number",
      default: "0",
      required: false,
    },
    {
      name: "inner-flag-has-actions",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_INNER_FLAG_HAS_ACTIONS_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "min-dropdown-actions",
      description: "_A_GROUP_BUTTON_DROPDOWN_PROPS_MIN_DROPDOWN_ACTIONS_DESCRIPTION_",
      type: "Number",
      default: "2",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
