import {
  h,
} from "vue";

import AMobileAPI from "../compositionAPI/AMobileAPI";
import ComponentsAPI from "./compositionAPI/ComponentsAPI";
import EmitsAPI from "./compositionAPI/EmitsAPI";

import {
  isInteger,
} from "lodash-es";

/**
 * Pagination.
 * @component
 * @example
 * <a-pagination :count-all-rows="Wert" :disabled="Wert" />
 *
 * @param {Number} countAllRows - Beschreibung der countAllRows.
 * @param {Boolean} disabled - Beschreibung der disabled.
 */
// @vue/component
export default {
  name: "APagination",
  props: {
    countAllRows: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    hasRows: {
      type: Boolean,
      required: true,
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
    offset: {
      type: Number,
      required: true,
    },
    rowsLength: {
      type: Number,
      required: true,
    },
    totalRowsCount: {
      type: Number,
      required: true,
    },
    modes: {
      type: Object,
      required: false,
      default: () => ({
        // perPage: inline / group / select
        // pagination: normal / short / loadMore
        desktop: {
          perPage: {
            mode: "group",
            position: 0,
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
          },
          pagination: {
            mode: "short",
            position: 1,
          },
        },
      }),
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
    if (!this.hasRows) {
      return "";
    }
    return h("div", {
      class: "a_pagination__parent",
    }, this.components);
  },
};
