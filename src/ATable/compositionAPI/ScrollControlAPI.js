import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

import {
  isColumnVisibleFromModel,
} from "../utils/utils.js";
import {
  cloneDeep,
  forEach,
  isNil,
} from "lodash-es";

export default function ScrollControlAPI(props, { emit }, {
  columnsOrdered = computed(() => []),
  columnsScrollInvisible = ref([]),
  indexFirstScrollInvisibleColumn = ref(undefined),
  isMobile = ref(false),
  isMultipleActionsActive = ref(undefined),
  modelColumnsVisibleLocal = ref({}),
  modelIsTableWithoutScroll = ref(false),
}) {
  const columnWidthDefault = toRef(props, "columnWidthDefault");
  const columnActionsWidth = toRef(props, "columnActionsWidth");
  const columnActionsWidthMin = toRef(props, "columnActionsWidthMin");
  const isActionColumnVisible = toRef(props, "isActionColumnVisible");
  const isSimpleTable = toRef(props, "isSimpleTable");

  let changingTableWidth = false;

  const columnActionsWidthMinLocal = computed(() => {
    if (isActionColumnVisible.value) {
      return columnActionsWidthMin.value;
    }
    return 0;
  });
  const columnsSpecialWidth = computed(() => {
    const columnMultipleActionsWidth = isMultipleActionsActive.value ? columnActionsWidthMin.value : 0;
    const scrollBarWidth = isSimpleTable.value ? 0 : 10; // delta for table resize when scrollbar appears
    return columnMultipleActionsWidth + scrollBarWidth;
  });

  const tableWidth = ref(undefined);
  const aTableRef = ref(undefined);
  const columnsVisibleAdditionalSpaceForOneGrow = ref(0);

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
  };

  const checkVisibleColumns = () => {
    if (isMobile.value ||
      tableWidth.value === 0) {
      setAllDefaultForMobile();
      return;
    }
    const TABLE_WIDTH_WITHOUT_ACTIONS_MIN = tableWidth.value - columnsSpecialWidth.value - columnActionsWidthMinLocal.value;
    const TABLE_WIDTH_WITHOUT_ACTIONS_MAX = tableWidth.value - columnsSpecialWidth.value - columnActionsWidth.value;

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
      const COLUMN_WIDTH = +column.width || columnWidthDefault.value;
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
        const COLUMN_WIDTH = +COLUMN.width || columnWidthDefault.value;

        columnsWidthInOrder -= COLUMN_WIDTH;
        sumGrows -= isNil(COLUMN.grow) ? 1 : COLUMN.grow;

        if (columnsWidthInOrder <= TABLE_WIDTH_WITHOUT_ACTIONS_MAX) {
          break;
        }
      }
    }

    let freeSpaceWidth = 0;
    const TABLE_WIDTH = isMinOneColumnHide ? TABLE_WIDTH_WITHOUT_ACTIONS_MAX : TABLE_WIDTH_WITHOUT_ACTIONS_MIN;
    if (modelIsTableWithoutScroll.value) {
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

  const resizeOb = new ResizeObserver(entries => {
    // since we are observing only a single element, so we access the first element in entries array
    // TODO add delta for table resize when scrollbar appears
    const RECT = entries[0].contentRect;
    if (tableWidth.value !== RECT.width) {
      if (!changingTableWidth) {
        changingTableWidth = true;
        tableWidth.value = RECT.width;
        checkVisibleColumns();
        changingTableWidth = false;
      }
    }
  });

  const onWatchMobileScrollControl = newValue => {
    if (newValue) {
      resizeOb.unobserve(aTableRef.value);
      setAllDefaultForMobile();
    } else {
      resizeOb.observe(aTableRef.value);
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
