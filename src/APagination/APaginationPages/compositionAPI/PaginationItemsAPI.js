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
  const countAllRows = toRef(props, "countAllRows");
  const limit = toRef(props, "limit");
  const offset = toRef(props, "offset");
  const paginationMaxItems = toRef(props, "paginationMaxItems"); // 7

  const isPaginationMaxItemsEven = computed(() => {
    return isEven(paginationMaxItems.value);
  });

  const currentItem = computed(() => {
    /* eslint-disable-next-line no-bitwise */
    return (offset.value / limit.value >> 0) + 1;
  });

  const maxItems = computed(() => {
    return ceil(countAllRows.value / limit.value);
  });

  const paginationMinIndex = computed(() => {
    return Math.floor(paginationMaxItems.value / 2);
  });

  const paginationMaxIndex = computed(() => {
    return paginationMaxItems.value * 2 - 1;
  });

  const getIndexStartAndEndForPagination = ({ currentItemIndex, paginationLength }) => {
    let indexStart;
    let indexEnd;
    const MIN_INDEX = paginationMinIndex.value;
    const MAX_INDEX = paginationMaxIndex.value;
    if (currentItemIndex <= MIN_INDEX) {
      indexStart = 0;
      indexEnd = paginationMaxItems.value;
    } else if (currentItemIndex >= (MAX_INDEX - (MIN_INDEX + 1))) {
      indexStart = MAX_INDEX - paginationMaxItems.value;
      indexEnd = MAX_INDEX;
    } else if (isPaginationMaxItemsEven.value) {
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
