import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

import ARemPxAPI from "../../compositionAPI/ARemPxAPI";

import {
  isColumnVisibleFromModel,
} from "../utils/utils.js";
import {
  cloneDeep,
  debounce,
  forEach,
  isNil,
  isUndefined,
} from "lodash-es";

export default function ScrollControlAPI(props, { emit }, {
  columnActionsWidthLocal = computed(() => 0),
  columnActionsWidthMinLocal = computed(() => 0),
  columnsOrdered = computed(() => []),
  columnsScrollInvisible = ref([]),
  columnWidthDefaultRemLocal = computed(() => 0),
  indexFirstScrollInvisibleColumn = ref(undefined),
  isMobile = ref(false),
  isMultipleActionsActive = ref(undefined),
  modelColumnsVisibleLocal = ref({}),
  modelIsTableWithoutScroll = ref(false),
  modelIsTableWithoutScrollComputed = computed(() => false),
}) {
  const isActionColumnVisible = toRef(props, "isActionColumnVisible");
  const isSimpleTable = toRef(props, "isSimpleTable");
  const useRem = toRef(props, "useRem");

  const {
    scalePxWithRem,
  } = ARemPxAPI();

  const aTableRef = ref(undefined);
  const columnsVisibleAdditionalSpaceForOneGrow = ref(0);
  const tableWidth = ref(undefined);
  let changingTableWidth = false;
  const delta = 20; // approx scrollbar width + 2px for <tr> border

  const scaleWidthPxWithRemLocal = width => {
    if (useRem.value) {
      return scalePxWithRem(width);
    }

    return width;
  };

  const _columnActionsWidthMinLocal = computed(() => {
    if (isActionColumnVisible.value) {
      return columnActionsWidthMinLocal.value;
    }

    return 0;
  });

  const columnsSpecialWidth = computed(() => {
    const columnMultipleActionsWidth = isMultipleActionsActive.value ? columnActionsWidthMinLocal.value : 0;
    const scrollBarWidth = isSimpleTable.value ? 0 : delta; // delta for table resize when scrollbar appears

    return columnMultipleActionsWidth + scrollBarWidth;
  });


  const setAdditionalSpaceColumnsForOneGrow = ({
    sumGrows = 0,
    freeSpaceWidth = 0,
  }) => {
    if (sumGrows > 0) {
      columnsVisibleAdditionalSpaceForOneGrow.value = freeSpaceWidth / sumGrows;
    } else {
      columnsVisibleAdditionalSpaceForOneGrow.value = 0;
    }
  };

  const setColumnsScrollInvisible = () => {
    if (isNil(indexFirstScrollInvisibleColumn.value) ||
      columnsOrdered.value.length < indexFirstScrollInvisibleColumn.value) {
      columnsScrollInvisible.value = [];
    } else {
      const COLUMNS_SCROLL_VISIBLE = [];
      for (let i = indexFirstScrollInvisibleColumn.value; i < columnsOrdered.value.length; i++) {
        const COLUMN = columnsOrdered.value[i];
        if (isColumnVisibleFromModel({
          column: COLUMN,
          modelColumnsVisibleLocal: modelColumnsVisibleLocal.value,
        })) {
          COLUMNS_SCROLL_VISIBLE.push(cloneDeep(COLUMN));
        }
      }
      columnsScrollInvisible.value = COLUMNS_SCROLL_VISIBLE;
    }
  };

  const setAllDefaultForMobile = () => {
    columnsScrollInvisible.value = [];
    columnsVisibleAdditionalSpaceForOneGrow.value = 0;
    indexFirstScrollInvisibleColumn.value = 1000;
    tableWidth.value = 0;
  };

  const checkVisibleColumns = () => {
    if (isMobile.value ||
      tableWidth.value === 0) {
      setAllDefaultForMobile();
      return;
    }

    if (isUndefined(tableWidth.value)) {
      return;
    }
    const TABLE_WIDTH_WITHOUT_ACTIONS_MIN = tableWidth.value - columnsSpecialWidth.value - _columnActionsWidthMinLocal.value;
    const TABLE_WIDTH_WITHOUT_ACTIONS_MAX = tableWidth.value - columnsSpecialWidth.value - columnActionsWidthLocal.value;

    let columnsWidthInOrder = 0;
    let indexFirstScrollInvisibleColumnLocal = 0;
    let sumGrows = 0;
    let isMinOneColumnHide = false;
    forEach(columnsOrdered.value, column => {
      if (!isColumnVisibleFromModel({
        column,
        modelColumnsVisibleLocal: modelColumnsVisibleLocal.value,
      })) {
        indexFirstScrollInvisibleColumnLocal++;
        return;
      }
      const COLUMN_WIDTH = +scaleWidthPxWithRemLocal(column.width) || columnWidthDefaultRemLocal.value;
      if (columnsWidthInOrder + COLUMN_WIDTH > TABLE_WIDTH_WITHOUT_ACTIONS_MIN) {
        isMinOneColumnHide = true;
        return false;
      }
      columnsWidthInOrder += COLUMN_WIDTH;
      indexFirstScrollInvisibleColumnLocal++;
      sumGrows += isNil(column.grow) ? 1 : column.grow;
    });
    if (isMinOneColumnHide && columnsWidthInOrder > TABLE_WIDTH_WITHOUT_ACTIONS_MAX) {
      for (let i = indexFirstScrollInvisibleColumnLocal - 1; i >= 0; i--) {
        indexFirstScrollInvisibleColumnLocal--;
        const COLUMN = columnsOrdered.value[indexFirstScrollInvisibleColumnLocal];
        if (!isColumnVisibleFromModel({
          column: COLUMN,
          modelColumnsVisibleLocal: modelColumnsVisibleLocal.value,
        })) {
          continue;
        }
        const COLUMN_WIDTH = +scaleWidthPxWithRemLocal(COLUMN.width) || columnWidthDefaultRemLocal.value;

        columnsWidthInOrder -= COLUMN_WIDTH;
        sumGrows -= isNil(COLUMN.grow) ? 1 : COLUMN.grow;

        if (columnsWidthInOrder <= TABLE_WIDTH_WITHOUT_ACTIONS_MAX) {
          break;
        }
      }
    }

    let freeSpaceWidth = 0;
    const TABLE_WIDTH = isMinOneColumnHide ? TABLE_WIDTH_WITHOUT_ACTIONS_MAX : TABLE_WIDTH_WITHOUT_ACTIONS_MIN;
    if (modelIsTableWithoutScrollComputed.value) {
      freeSpaceWidth = TABLE_WIDTH - columnsWidthInOrder;
    } else if (indexFirstScrollInvisibleColumnLocal === columnsOrdered.value.length) {
      freeSpaceWidth = TABLE_WIDTH - columnsWidthInOrder;
    }
    indexFirstScrollInvisibleColumn.value = indexFirstScrollInvisibleColumnLocal;

    setAdditionalSpaceColumnsForOneGrow({
      sumGrows,
      freeSpaceWidth,
    });
    setColumnsScrollInvisible();
  };

  const adjustTableWidth = ({ entries, forceAdjust }) => {
    const RECT = entries[0].contentRect;
    const tableWidthMissingOrExceededDelta = forceAdjust ||
      tableWidth.value > RECT.width + delta ||
      tableWidth.value < RECT.width - delta;
    if (tableWidthMissingOrExceededDelta) {
      if (!changingTableWidth) {
        changingTableWidth = true;
        tableWidth.value = RECT.width;
        checkVisibleColumns();
        changingTableWidth = false;
      }
    }
  };

  const resizeOb = new ResizeObserver(
    debounce(entries => {
      // since we are observing only a single element, so we access the first element in entries array
      if (isUndefined(tableWidth.value)) {
        adjustTableWidth({ entries, forceAdjust: true });
      } else {
        adjustTableWidth({ entries });
      }
    }, 300),
  );

  const onWatchMobileScrollControl = newValue => {
    if (newValue) {
      resizeOb.unobserve(aTableRef.value);
      setAllDefaultForMobile();
    } else {
      resizeOb.observe(aTableRef.value);
      if (modelIsTableWithoutScroll.value) {
        checkVisibleColumns();
      }
    }
  };

  const changeModelIsTableWithoutScroll = model => {
    modelIsTableWithoutScroll.value = model;
    emit("updateModelIsTableWithoutScroll", model);
    if (modelIsTableWithoutScroll.value) {
      checkVisibleColumns();
    }
  };

  onMounted(() => {
    if (!isMobile.value) {
      resizeOb.observe(aTableRef.value);
    }
  });
  onBeforeUnmount(() => {
    resizeOb.unobserve(aTableRef.value);
  });

  watch(columnsOrdered, () => {
    checkVisibleColumns();
  });


  return {
    aTableRef,
    changeModelIsTableWithoutScroll,
    checkVisibleColumns,
    columnsVisibleAdditionalSpaceForOneGrow,
    onWatchMobileScrollControl,
  };
}
