export default function PropsAPI() {
  const dataProps = [
    {
      name: "duration",
      description: "_A_PROGRESS_CIRCLE_PROPS_DURATION_",
      type: "Number",
      default: "undefined",
      required: false,
    },
    {
      name: "indeterminate",
      description: "_A_PROGRESS_CIRCLE_PROPS_INDETERMINATE_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "max",
      description: "_A_PROGRESS_CIRCLE_PROPS_MAX_",
      type: "Number",
      default: 100,
      required: false,
    },
    {
      name: "min",
      description: "_A_PROGRESS_CIRCLE_PROPS_MIN_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "rotate",
      description: "_A_PROGRESS_CIRCLE_PROPS_ROTATE_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "showValue",
      description: "_A_PROGRESS_CIRCLE_PROPS_SHOW_VALUE_",
      type: "Boolean",
      default: "true",
      required: false,
    },
    {
      name: "strokeWidth",
      description: "_A_PROGRESS_CIRCLE_PROPS_STROKE_WIDTH_",
      type: "Number",
      default: 5,
      required: false,
    },
    {
      name: "value",
      description: "_A_PROGRESS_CIRCLE_PROPS_VALUE_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "valueTextClass",
      description: "_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_CLASS_",
      type: "String / Object",
      default: "undefined",
      required: false,
    },
    {
      name: "valueTextInteger",
      description: "_A_PROGRESS_CIRCLE_PROPS_VALUE_TEXT_INTEGER_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "width",
      description: "_A_PROGRESS_CIRCLE_PROPS_WIDTH_",
      type: "Number / String",
      default: 125,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
