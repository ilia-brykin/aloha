export default function PropsAPI() {
  const dataProps = [
    {
      name: "model-value",
      description: "_A_RATE_DESCRIPTION_MODEL_VALUE_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "size",
      description: "_A_RATE_DESCRIPTION_SIZE_",
      type: "String",
      default: "medium",
      required: false,
    },
    {
      name: "half-icon",
      description: "_A_RATE_DESCRIPTION_HALF_ICON_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "readonly",
      description: "_A_RATE_DESCRIPTION_READONLY_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "color",
      description: "_A_RATE_DESCRIPTION_COLOR_",
      type: "String",
      default: "yellow",
      required: false,
    },
    {
      name: "hovered-color",
      description: "_A_RATE_DESCRIPTION_HOVERED_COLOR_",
      type: "String",
      default: "orange",
      required: false,
    },
    {
      name: "rating",
      description: "_A_RATE_DESCRIPTION_RATING_",
      type: "Number",
      default: 5,
      required: false,
    },
    {
      name: "icon",
      description: "_A_RATE_DESCRIPTION_ICON_",
      type: "String",
      default: "Star",
      required: false,
    },
    {
      name: "icon-fill",
      description: "_A_RATE_DESCRIPTION_ICON_FILL_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "show-score",
      description: "_A_RATE_DESCRIPTION_SHOW_SCORE_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "text",
      description: "_A_RATE_DESCRIPTION_TEXT_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "extra",
      description: "_A_RATE_DESCRIPTION_EXTRA_",
      type: "String",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
