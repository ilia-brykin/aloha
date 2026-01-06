import {
  h,
} from "vue";

import AMobileAPI from "../compositionAPI/AMobileAPI";
import ComponentsAPI from "./compositionAPI/ComponentsAPI";
import EmitsAPI from "./compositionAPI/EmitsAPI";

import {
  isInteger,
} from "lodash-es";

// @vue/component
export default {
  name: "APagination",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    limit: {
      type: Number,
      required: true,
    },
    limitsPerPage: {
      type: Array,
      required: false,
      default: () => ["10", "25", "50", "100"],
    },
    maxPages: {
      type: Number,
      required: false,
      default: 5,
      validator: value => isInteger(value) && value > 0,
    },
    modes: {
      type: Object,
      required: false,
      default: () => ({
        /*
         * perPage: inline / group / select
         * pagination: normal / short / loadMore
         */
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
      }),
    },
    offset: {
      type: Number,
      required: true,
    },
    rowsLength: {
      type: Number,
      required: true,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({
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
      }),
    },
    totalCount: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "update:limit",
    "update:offset",
  ],
  setup(props, context) {
    const {
      isMobileWidth: isMobile,
    } = AMobileAPI();

    const {
      updateLimit,
      updateOffset,
    } = EmitsAPI(props, context);

    const {
      components,
    } = ComponentsAPI(props, {
      isMobile,
      updateLimit,
      updateOffset,
    });

    return {
      components,
      updateLimit,
      updateOffset,
    };
  },
  render() {
    return h("div", {
      class: "a_pagination__parent",
    }, this.components);
  },
};
