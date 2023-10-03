export default function PropsAPI() {
  const dataProps = [
    {
      name: "back-button-attributes",
      description: "_A_WIZARD_PROPS_BACK_BUTTON_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "back-button-class",
      description: "_A_TRANSLATION_PROPS_BACK_BUTTON_CLASS_DESCRIPTION_",
      type: "String / Array / Object",
      default: "a_btn a_btn_secondary",
      required: false,
    },
    {
      name: "back-button-icon-left",
      description: "_A_TRANSLATION_PROPS_BACK_BUTTON_ICON_LEFT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "back-button-icon-right",
      description: "_A_TRANSLATION_PROPS_BACK_BUTTON_ICON_RIGHT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "back-button-text",
      description: "_A_TRANSLATION_PROPS_BACK_BUTTON_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_PREVIOUS_",
      required: false,
    },
    {
      name: "back-button-title",
      description: "_A_TRANSLATION_PROPS_BACK_BUTTON_TITLE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "extra",
      description: "_A_TRANSLATION_PROPS_EXTRA_DESCRIPTION_",
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
      description: "_A_TRANSLATION_PROPS_FORWARD_BUTTON_CLASS_DESCRIPTION_",
      type: "String / Array / Object",
      default: "a_btn a_btn_secondary",
      required: false,
    },
    {
      name: "forward-button-icon-left",
      description: "_A_TRANSLATION_PROPS_FORWARD_BUTTON_ICON_LEFT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "forward-button-icon-right",
      description: "_A_TRANSLATION_PROPS_FORWARD_BUTTON_ICON_RIGHT_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "forward-button-text",
      description: "_A_TRANSLATION_PROPS_FORWARD_BUTTON_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_PREVIOUS_",
      required: false,
    },
    {
      name: "forward-button-title",
      description: "_A_TRANSLATION_PROPS_FORWARD_BUTTON_TITLE_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "is-back-button-disabled",
      description: "_A_TRANSLATION_PROPS_IS_BACK_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-back-button-hide",
      description: "_A_TRANSLATION_PROPS_IS_BACK_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-back-first-button-hide",
      description: "_A_TRANSLATION_PROPS_IS_BACK_FIRST_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-back-step-button-disabled",
      description: "_A_TRANSLATION_PROPS_IS_BACK_STEP_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-buttons-loading",
      description: "_A_TRANSLATION_PROPS_IS_BUTTONS_LOADING_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-control-outside",
      description: "_A_TRANSLATION_PROPS_IS_CONTROL_OUTSIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-button-disabled",
      description: "_A_TRANSLATION_PROPS_IS_FORWARD_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-button-hide",
      description: "_A_TRANSLATION_PROPS_IS_FORWARD_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-last-button-hide",
      description: "_A_TRANSLATION_PROPS_IS_FORWARD_LAST_BUTTON_HIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-forward-step-button-disabled",
      description: "_A_TRANSLATION_PROPS_IS_FORWARD_STEP_BUTTON_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "is-step-number-visible",
      description: "_A_TRANSLATION_PROPS_IS_STEP_NUMBER_VISIBLE_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "is-steps-justified",
      description: "_A_TRANSLATION_PROPS_IS_STEPS_JUSTIFIED_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "is-toolbar-bottom",
      description: "_A_TRANSLATION_PROPS_IS_TOOLBAR_BOTTOM_DESCRIPTION_",
      type: "Boolean",
      default: true,
      required: false,
    },
    {
      name: "is-toolbar-top",
      description: "_A_TRANSLATION_PROPS_IS_TOOLBAR_TOP_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "step-active",
      description: "_A_TRANSLATION_PROPS_STEP_ACTIVE_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: false,
    },
    {
      name: "steps",
      description: "_A_TRANSLATION_PROPS_STEPS_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "steps-progressbar-text",
      description: "_A_TRANSLATION_PROPS_STEP_PROGRESSBAR_TEXT_DESCRIPTION_",
      type: "String",
      default: "_A_WIZARD_STEPS_PROGRESSBAR_TEXT_{{stepActive}}_{{stepsCount}}_{{stepActiveLabel}}_",
      required: false,
    },
    {
      name: "steps-visited",
      description: "_A_TRANSLATION_PROPS_STEPS_VISITED_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "toolbar-bottom-teleport-id",
      description: "_A_TRANSLATION_PROPS_TOOLBAR_BOTTOM_TELEPORT_ID_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "type",
      description: "_A_TRANSLATION_PROPS_TYPE_DESCRIPTION_",
      type: "String",
      default: "basic",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
