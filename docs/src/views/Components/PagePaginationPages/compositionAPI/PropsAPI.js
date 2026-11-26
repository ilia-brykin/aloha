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
      name: "hide-on-single-page",
      description: "_A_PAGINATION_PAGES_PROPS_HIDE_ON_SINGLE_PAGE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "icon-first",
      description: "_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_",
      type: "String / Object",
      default: "ChevronDoubleLeft (SVG)",
      required: false,
    },
    {
      name: "icon-last",
      description: "_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_",
      type: "String / Object",
      default: "ChevronDoubleRight (SVG)",
      required: false,
    },
    {
      name: "icon-next",
      description: "_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_",
      type: "String / Object",
      default: "ChevronRight (SVG)",
      required: false,
    },
    {
      name: "icon-previous",
      description: "_A_PAGINATION_PAGES_PROPS_ICONS_DESCRIPTION_",
      type: "String / Object",
      default: "ChevronLeft (SVG)",
      required: false,
    },
    {
      name: "id",
      description: "_A_PAGINATION_PAGES_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "uniqueId(\"a_pagination_pages_\")",
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
      default: "\"normal\"",
      required: false,
    },
    {
      name: "offset",
      description: "_A_PAGINATION_PAGES_PROPS_OFFSET_DESCRIPTION_",
      type: "Number",
      default: 0,
      required: false,
    },
    {
      name: "page",
      description: "_A_PAGINATION_PAGES_PROPS_PAGE_DESCRIPTION_",
      type: "Number",
      default: undefined,
      required: false,
    },
    {
      name: "show-edges",
      description: "_A_PAGINATION_PAGES_PROPS_SHOW_EDGES_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "show-jumper",
      description: "_A_PAGINATION_PAGES_PROPS_SHOW_JUMPER_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "size",
      description: "_A_PAGINATION_PAGES_PROPS_SIZE_DESCRIPTION_",
      type: "String",
      default: "\"medium\"",
      required: false,
    },
    {
      name: "texts",
      description: "_A_PAGINATION_PAGES_PROPS_TEXTS_DESCRIPTION_",
      type: "Object",
      default: `() => ({
  pagesFirstPage: "_A_PAGINATION_FIRST_PAGE_",
  pagesJumperButton: "_A_PAGINATION_JUMPER_BUTTON_",
  pagesJumperError: "_A_PAGINATION_JUMPER_ERROR_{{allPages}}_",
  pagesJumperLabel: "_A_PAGINATION_JUMPER_LABEL_",
  pagesJumperOf: "_A_PAGINATION_JUMPER_OF_{{allPages}}_",
  pagesLastPage: "_A_PAGINATION_LAST_PAGE_",
  pagesLoadMore: "_A_PAGINATION_LOAD_MORE_",
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

  const dataEvents = [
    { name: "change", type: "Function", description: "_A_PAGINATION_PAGES_EVENTS_CHANGE_DESCRIPTION_" },
    { name: "update:limit", type: "Function", description: "_A_PAGINATION_PAGES_EVENTS_UPDATE_LIMIT_DESCRIPTION_" },
    { name: "update:offset", type: "Function", description: "_A_PAGINATION_PAGES_EVENTS_UPDATE_OFFSET_DESCRIPTION_" },
    { name: "update:page", type: "Function", description: "_A_PAGINATION_PAGES_EVENTS_UPDATE_PAGE_DESCRIPTION_" },
  ];

  const dataSlots = [
    { name: "first", description: "_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_" },
    { name: "last", description: "_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_" },
    { name: "next", description: "_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_" },
    { name: "page", description: "_A_PAGINATION_PAGES_SLOTS_PAGE_DESCRIPTION_" },
    { name: "previous", description: "_A_PAGINATION_PAGES_SLOTS_ARROWS_DESCRIPTION_" },
  ];

  return {
    dataEvents,
    dataProps,
    dataSlots,
  };
}
