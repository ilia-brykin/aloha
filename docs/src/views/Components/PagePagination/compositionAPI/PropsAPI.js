export default function PropsAPI() {
  const dataProps = [
    {
      name: "disabled",
      description: "_A_PAGINATION_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "limit",
      description: "_A_PAGINATION_PROPS_LIMIT_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: true,
    },
    {
      name: "limits-per-page",
      description: "_A_PAGINATION_PROPS_LIMITS_PER_PAGE_DESCRIPTION_",
      type: "Array",
      default: "() => [\"10\", \"25\", \"50\", \"100\"]",
      required: false,
    },
    {
      name: "max-pages",
      description: "_A_PAGINATION_PROPS_MAX_PAGES_DESCRIPTION_",
      type: "Number",
      default: 5,
      required: false,
    },
    {
      name: "offset",
      description: "_A_PAGINATION_PROPS_OFFSET_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: true,
    },
    {
      name: "rows-length",
      description: "_A_PAGINATION_PROPS_ROWS_LENGTH_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: true,
    },
    {
      name: "modes",
      description: "_A_PAGINATION_PROPS_MODES_DESCRIPTION_",
      type: "Object",
      default: `() => ({
  desktop: {
    perPage: {
      mode: "group",
      position: 0,
      showTextCountFromTo: true,
    },
    pagination: {
      mode: "normal",
      position: 1,
    },
  },
  mobile: {
    perPage: {
      mode: "select",
      position: 0,
      showTextCountFromTo: false,
    },
    pagination: {
      mode: "short",
      position: 1,
    },
  },
})`,
      required: false,
    },
    {
      name: "total-count",
      description: "_A_PAGINATION_PROPS_TOTAL_COUNT_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: true,
    },
  ];

  return {
    dataProps,
  };
}
