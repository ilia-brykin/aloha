import {
  computed,
  toRef,
} from "vue";

import {
  isEven,
} from "../../../utils/utilsMath";
import {
  ceil,
  isNil,
} from "lodash-es";

export default function PaginationItemsAPI(props) {
  const limit = toRef(props, "limit");
  const maxPages = toRef(props, "maxPages"); // 7
  const offset = toRef(props, "offset");
  const page = toRef(props, "page");
  const showEdges = toRef(props, "showEdges");
  const totalCount = toRef(props, "totalCount");

  const isMaxPagesEven = computed(() => {
    return isEven(maxPages.value);
  });

  // at least one page: without rows "1 of 1" and all buttons disabled
  const maxItems = computed(() => {
    return Math.max(ceil(totalCount.value / limit.value), 1);
  });

  // v-model:page or offset; an offset behind the last page (e.g. after a filter) shows the last page
  const currentItem = computed(() => {
    const PAGE = isNil(page.value) ?
      /* eslint-disable-next-line no-bitwise */
      ((offset.value || 0) / limit.value >> 0) + 1 :
      page.value;

    return Math.min(Math.max(PAGE, 1), maxItems.value);
  });

  const offsetLocal = computed(() => {
    return isNil(page.value) ?
      offset.value || 0 :
      (page.value - 1) * limit.value;
  });

  const paginationMinIndex = computed(() => {
    return Math.floor(maxPages.value / 2);
  });

  const paginationMaxIndex = computed(() => {
    return maxPages.value * 2 - 1;
  });

  const getIndexStartAndEndForPagination = ({ currentItemIndex, paginationLength }) => {
    let indexStart;
    let indexEnd;
    const MIN_INDEX = paginationMinIndex.value;
    const MAX_INDEX = paginationMaxIndex.value;
    if (currentItemIndex <= MIN_INDEX) {
      indexStart = 0;
      indexEnd = maxPages.value;
    } else if (currentItemIndex >= (MAX_INDEX - (MIN_INDEX + 1))) {
      indexStart = MAX_INDEX - maxPages.value;
      indexEnd = MAX_INDEX;
    } else if (isMaxPagesEven.value) {
      indexStart = currentItemIndex - MIN_INDEX + 1;
      indexEnd = currentItemIndex + MIN_INDEX + 1;
    } else {
      indexStart = currentItemIndex - MIN_INDEX;
      indexEnd = currentItemIndex + MIN_INDEX + 1;
    }

    if (indexEnd > paginationLength) {
      const DIFF = indexEnd - paginationLength;
      indexEnd = paginationLength + 1;
      indexStart = indexStart - DIFF;
      if (indexStart < 0) {
        indexStart = 0;
      }
    }

    return {
      indexStart,
      indexEnd,
    };
  };

  const paginationItems = computed(() => {
    const PAGINATION_ITEMS = [];
    let currentItemIndex = -1;
    for (let i = maxPages.value - 1; i > -maxPages.value; i--) {
      const NUMBER = currentItem.value - i;
      if (NUMBER > 0 && NUMBER <= maxItems.value) {
        PAGINATION_ITEMS.push(NUMBER);
      }
      if (i === 0) {
        currentItemIndex = PAGINATION_ITEMS.length - 1;
      }
    }

    const {
      indexStart,
      indexEnd,
    } = getIndexStartAndEndForPagination({
      currentItemIndex,
      paginationLength: PAGINATION_ITEMS.length,
    });
    return PAGINATION_ITEMS.slice(indexStart, indexEnd);
  });

  // the pages with the first and the last page and "…" between (show-edges): 1 … 4 5 6 … 20
  const paginationEntries = computed(() => {
    const ENTRIES = paginationItems.value.map(item => ({ page: item }));
    if (!showEdges.value || !ENTRIES.length) {
      return ENTRIES;
    }
    const FIRST = ENTRIES[0].page;
    const LAST = ENTRIES[ENTRIES.length - 1].page;
    if (FIRST > 1) {
      ENTRIES.unshift(
        { page: 1 },
        // "…" only for a gap: 1 2 3 instead of 1 … 3
        ...(FIRST > 3 ? [{ isEllipsis: true, key: "start" }] : FIRST === 3 ? [{ page: 2 }] : []),
      );
    }
    if (LAST < maxItems.value) {
      ENTRIES.push(
        ...(LAST < maxItems.value - 2 ?
          [{ isEllipsis: true, key: "end" }] :
          LAST === maxItems.value - 2 ? [{ page: maxItems.value - 1 }] : []),
        { page: maxItems.value },
      );
    }

    return ENTRIES;
  });

  return {
    currentItem,
    maxItems,
    offsetLocal,
    paginationEntries,
    paginationItems,
  };
}
