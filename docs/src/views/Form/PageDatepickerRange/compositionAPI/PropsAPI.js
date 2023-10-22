import {
  uniqueId,
} from "lodash-es";

export default function PropsAPI() {
  const dataProps = [
    {
      name: "id",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_ID_",
      type: "[String, Number]",
      default: () => uniqueId("a_ui_"),
      required: false,
    },
    {
      name: "htmlId",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_HTML_ID_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "width",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_WIDTH_",
      type: "[String, Number]",
      default: null,
      required: false,
    },
    {
      name: "model",
      description: "_A_DATEPICKER_RANGE_DESCRIPTION_PROP_MODEL_",
      type: "Object",
      default: () => ({}),
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
