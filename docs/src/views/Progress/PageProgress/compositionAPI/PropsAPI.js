export default function PropsAPI() {
  const dataProps = [
    {
      name: "class-progress-bar",
      description: "_A_PROGRESS_PROPS_CLASS_PROGRESS_BAR_",
      type: "String / Object / Function",
      default: "undefined",
      required: "false",
    },
    {
      name: "duration",
      description: "_A_PROGRESS_PROPS_DURATION_",
      type: "Number",
      default: "undefined",
      required: "false",
    },
    {
      name: "indeterminate",
      description: "_A_PROGRESS_PROPS_INDETERMINATE_",
      type: "Boolean",
      default: "false",
      required: "false",
    },
    {
      name: "max",
      description: "_A_PROGRESS_PROPS_MAX_",
      type: "Number",
      default: 100,
      required: "false",
    },
    {
      name: "min",
      description: "_A_PROGRESS_PROPS_MIN_",
      type: "Number",
      default: 0,
      required: "false",
    },
    {
      name: "reverse",
      description: "_A_PROGRESS_PROPS_REVERSE_",
      type: "Boolean",
      default: "false",
      required: "false",
    },
    {
      name: "showValue",
      description: "_A_PROGRESS_PROPS_SHOW_VALUE_",
      type: "Boolean",
      default: "true",
      required: "false",
    },
    {
      name: "striped",
      description: "_A_PROGRESS_PROPS_STRIPED_",
      type: "Boolean",
      default: "false",
      required: "false",
    },
    {
      name: "striped-flow",
      description: "_A_PROGRESS_PROPS_STRIPED_FLOW_",
      type: "Boolean",
      default: "false",
      required: "false",
    },
    {
      name: "value",
      description: "_A_PROGRESS_PROPS_VALUE_",
      type: "Number",
      default: 0,
      required: "false",
    },
    {
      name: "value-text-integer",
      description: "_A_PROGRESS_PROPS_VALUE_TEXT_INTEGER_",
      type: "Boolean",
      default: "false",
      required: "false",
    },
  ];

  return {
    dataProps,
  };
}
