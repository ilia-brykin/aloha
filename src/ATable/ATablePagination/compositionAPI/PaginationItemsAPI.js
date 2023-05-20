import {
  computed,
  toRef,
} from "vue";

import {
  ceil,
} from "lodash-es";

export default function PaginationItemsAPI(props) {
  const paginationMaxItems = toRef(props, "paginationMaxItems");
  const offset = toRef(props, "offset");
  const limit = toRef(props, "limit");
  const totalRowsCount = toRef(props, "totalRowsCount");

  const currentItem = computed(() => {
    return (offset.value / limit.value >> 0) + 1;
  });

  const maxItems = computed(() => {
    return ceil(totalRowsCount.value / limit.value);
  });

  const getIndexStartAndEndForPagination = ({ currentItemIndex, paginationLength }) => {
    let indexStart = -1;
    let indexEnd = paginationLength + 1;
    const MIN_INDEX = Math.floor(paginationMaxItems.value / 2);
    const MAX_INDEX = (paginationMaxItems.value * 2 - 1);
    if (currentItemIndex <= MIN_INDEX) {
      indexStart = 0;
      indexEnd = paginationMaxItems.value;
    } else if (currentItemIndex >= (MAX_INDEX - (MIN_INDEX + 1))) {
      indexStart = MAX_INDEX - paginationMaxItems.value;
      indexEnd = MAX_INDEX;
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
    for (let i = paginationMaxItems.value - 1; i > -paginationMaxItems.value; i--) {
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
      paginationLength: PAGINATION_ITEMS.length
    });
    return PAGINATION_ITEMS.slice(indexStart, indexEnd);
  });

  return {
    currentItem,
    maxItems,
    paginationItems,
  };
}
