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
  perPage: {
    mode: "group",
    position: 0,
    showTextCountFromTo: true,
  },
  pagination: {
    mode: "normal",
    position: 1,
  },
})`,
      required: false,
    },
    {
      name: "texts",
      description: "_A_PAGINATION_PROPS_TEXTS_DESCRIPTION_",
      type: "Object",
      default: `() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
  pagesNavigation: "_A_PAGINATION_NAVIGATION_",
  pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
  pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
  pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
  countFromTo: "_A_COUNT_PER_PAGE_{{start}}_{{current}}_{{count}}_",
  countPerPage: "_A_COUNT_PER_PAGE_",
  countPerPageItem: "_A_COUNT_PER_PAGE_ITEM_{{count}}_",
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
