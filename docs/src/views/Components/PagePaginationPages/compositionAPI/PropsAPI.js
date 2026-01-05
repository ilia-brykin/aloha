export default function PropsAPI() {
  const dataProps = [
    {
      name: "disabled",
      description: "_A_PAGINATION_PAGES_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "limit",
      description: "_A_PAGINATION_PAGES_PROPS_LIMIT_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: true,
    },
    {
      name: "max-pages",
      description: "_A_PAGINATION_PAGES_PROPS_MAX_PAGES_DESCRIPTION_",
      type: "Number",
      default: 5,
      required: false,
    },
    {
      name: "mode",
      description: "_A_PAGINATION_PAGES_PROPS_MODE_DESCRIPTION_",
      type: "String",
      default: "normal",
      required: false,
    },
    {
      name: "offset",
      description: "_A_PAGINATION_PAGES_PROPS_OFFSET_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: true,
    },
    {
      name: "texts",
      description: "_A_PAGINATION_PAGES_PROPS_TEXTS_DESCRIPTION_",
      type: "Object",
      default: `() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesMobile: "_A_PAGINATION_MOBILE_{{currentPage}}_{{allPages}}_",
  pagesNavigation: "_A_PAGINATION_NAVIGATION_",
  pagesNextPage: "_A_PAGINATION_NEXT_PAGE_",
  pagesPreviousPage: "_A_PAGINATION_PREVIOUS_PAGE_",
  pagesToPage: "_A_PAGINATION_TO_PAGE_{{page}}_",
})`,
      required: false,
    },
    {
      name: "total-count",
      description: "_A_PAGINATION_PAGES_PROPS_TOTAL_COUNT_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: true,
    },
  ];

  return {
    dataProps,
  };
}
