export default function PropsAPI() {
  const dataProps = [
    {
      name: "model",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_",
      type: "Object",
      default: () => ({}),
      required: false,
    },
    {
      name: "selected",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_SELECTED_",
      type: "Function",
      default: () => {},
      required: false,
    },
    {
      name: "disabled",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_DISABLED_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "options",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_OPTIONS_",
      type: "Object",
      default: () => ({}),
      required: false,
    },
    {
      name: "idPrefix",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_PREFIX_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "isError",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_IS_ERROR_",
      type: "Boolean",
      default: false,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
