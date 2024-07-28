export default function PropsAPI() {
  const dataProps = [
    {
      name: "aria-label",
      description: "_A_WIZARD_PROPS_ARIA_LABEL_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_ARIA_LABEL_",
      required: false,
    },
    {
      name: "aria-label-steps",
      description: "_A_WIZARD_PROPS_ARIA_LABEL_STEPS_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_STEPS_ARIA_LABEL_",
      required: false,
    },
    {
      name: "back-button-attributes",
      description: "_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "back-button-class",
      description: "_A_WIZARD_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_",
      type: "String / Array / Object",
      default: "a_btn a_btn_secondary",
      required: false,
    },
    {
      name: "back-button-icon-left",
      description: "_A_WIZARD_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "back-button-icon-right",
      description: "_A_WIZARD_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "back-button-text",
      description: "_A_WIZARD_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_PREVIOUS_",
      required: false,
    },
    {
      name: "back-button-title",
      description: "_A_WIZARD_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "extra",
      description: "_A_WIZARD_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "forward-button-attributes",
      description: "_A_WIZARD_PROPS_FORWARD_BUTTON_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "forward-button-class",
      description: "_A_WIZARD_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_",
      type: "String / Array / Object",
      default: "a_btn a_btn_secondary",
      required: false,
    },
    {
      name: "forward-button-icon-left",
      description: "_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "forward-button-icon-right",
      description: "_A_WIZARD_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "forward-button-text",
      description: "_A_WIZARD_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_PREVIOUS_",
      required: false,
    },
    {
      name: "forward-button-title",
      description: "_A_WIZARD_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "has-focus-jump",
      description: "_A_WIZARD_PROPS_HAS_FOCUS_JUMP_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "id",
      description: "_A_WIZARD_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "() => uniqueId(\"a_wizard_\")",
      required: false,
    },
    {
      name: "is-back-button-disabled",
      description: "_A_WIZARD_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-back-button-hide",
      description: "_A_WIZARD_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-back-first-button-hide",
      description: "_A_WIZARD_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-back-step-button-disabled",
      description: "_A_WIZARD_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-buttons-loading",
      description: "_A_WIZARD_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-control-outside",
      description: "_A_WIZARD_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-button-disabled",
      description: "_A_WIZARD_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-button-hide",
      description: "_A_WIZARD_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-last-button-hide",
      description: "_A_WIZARD_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-step-button-disabled",
      description: "_A_WIZARD_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-mobile",
      description: "_A_WIZARD_PROPS_IS_MOBILE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-step-number-visible",
      description: "_A_WIZARD_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "is-steps-justified",
      description: "_A_WIZARD_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "is-toolbar-bottom",
      description: "_A_WIZARD_PROPS_IS_TOOLBAR_BOTTOM_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "is-toolbar-top",
      description: "_A_WIZARD_PROPS_IS_TOOLBAR_TOP_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "key-id",
      description: "_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "show-only-active-step-mobile",
      description: "_A_WIZARD_PROPS_SHOW_ONLY_ACTIVE_STEP_MOBILE_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "step-active",
      description: "_A_WIZARD_PROPS_STEP_ACTIVE_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: false,
    },
    {
      name: "steps-icon-error",
      description: "_A_WIZARD_PROPS_STEP_ICON_ERROR_DESCRIPTION_",
      type: "String",
      default: "AlertDanger",
      required: false,
    },
    {
      name: "steps-icon-error-text",
      description: "_A_WIZARD_PROPS_STEP_ICON_ERROR_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_STEP_ERROR_",
      required: false,
    },
    {
      name: "steps-icon-warning",
      description: "_A_WIZARD_PROPS_STEP_ICON_WARNING_DESCRIPTION_",
      type: "String",
      default: "AlertWarning",
      required: false,
    },
    {
      name: "steps-icon-warning-text",
      description: "_A_WIZARD_PROPS_STEP_ICON_WARNING_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_STEP_WARNING_",
      required: false,
    },
    {
      name: "steps",
      description: "_A_WIZARD_PROPS_STEPS_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "steps-progressbar-text",
      description: "_A_WIZARD_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_",
      required: false,
    },
    {
      name: "steps-visited",
      description: "_A_WIZARD_PROPS_STEPS_VISITED_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "toolbar-bottom-teleport-id",
      description: "_A_WIZARD_PROPS_TOOLBAR_BOTTOM_TELEPORT_ID_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "type",
      description: "_A_WIZARD_PROPS_TYPE_DESCRIPTION_",
      type: "String",
      default: "basic",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
