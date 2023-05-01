export default function PropsAPI() {
  const dataProps = [
    {
      name: "alert-class",
      description: "_A_ALERT_PROPS_ALERT_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "alert-content-class",
      description: "_A_ALERT_PROPS_ALERT_CONTENT_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "closable",
      description: "_A_ALERT_PROPS_CLOSABLE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "closableFromOutside",
      description: "_A_ALERT_PROPS_CLOSABLE_FROM_OUTSIDE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "has-icon",
      description: "_A_ALERT_PROPS_HAS_ICON_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "html",
      description: "_A_ALERT_PROPS_HTML_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "icon",
      description: "_A_ALERT_PROPS_ICON_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "icon-class",
      description: "_A_ALERT_PROPS_ICON_CLASS_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "is-visible",
      description: "_A_ALERT_PROPS_IS_VISIBLE_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "text-close",
      description: "_A_ALERT_PROPS_TEXT_CLOSE_DESCRIPTION_",
      type: "String",
      default: "_ALERT_CLOSE_",
      required: false,
    },
    {
      name: "type",
      description: "_A_ALERT_PROPS_TYPE_DESCRIPTION_",
      type: "String",
      default: "danger",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
