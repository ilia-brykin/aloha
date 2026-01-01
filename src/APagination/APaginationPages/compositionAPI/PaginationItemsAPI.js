import {
  computed,
  toRef,
} from "vue";

import {
  isEven,
} from "../../../utils/utilsMath";
import {
  ceil,
} from "lodash-es";

export default function PaginationItemsAPI(props) {
  const totalCount = toRef(props, "totalCount");
  const limit = toRef(props, "limit");
  const offset = toRef(props, "offset");
  const maxPages = toRef(props, "maxPages"); // 7

  const isMaxPagesEven = computed(() => {
    return isEven(maxPages.value);
  });

  const currentItem = computed(() => {
    /* eslint-disable-next-line no-bitwise */
    return (offset.value / limit.value >> 0) + 1;
  });

  const maxItems = computed(() => {
    return ceil(totalCount.value / limit.value);
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

  return {
    currentItem,
    maxItems,
    paginationItems,
  };
}
