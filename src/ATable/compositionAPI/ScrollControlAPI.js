import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef, watch,
} from "vue";

import {
  cloneDeep,
  forEach,
  isNil,
} from "lodash-es";

export default function ScrollControlAPI(props, { emit }, {
  columnsOrdered = computed(() => []),
  isMobile = ref(false),
  isMultipleActionsActive = ref(undefined),
  modelColumnsVisibleLocal = ref({}),
}) {
  const columnWidthDefault = toRef(props, "columnWidthDefault");
  const columnActionsWidth = toRef(props, "columnActionsWidth");
  const isActionColumnVisible = toRef(props, "isActionColumnVisible");

  let changingTableWidth = false;

  const isColumnVisible = ({ column }) => {
    if (column.isRender === false) {
      return false;
    }
    const COLUMN_ID = column.id;
    if (COLUMN_ID in modelColumnsVisibleLocal.value) {
      return !!modelColumnsVisibleLocal.value[COLUMN_ID];
    }
    return !column.hide;
  };

  const columnActionsWidthMinLocal = computed(() => {
    if (isActionColumnVisible.value) {
      return 50;
    }
    return 0;
  });
  const columnsSpecialWidth = computed(() => {
    const columnMultipleActionsWidth = isMultipleActionsActive.value ? 50 : 0;
    const scrollBarWidth = 10;
    return columnMultipleActionsWidth + scrollBarWidth;
  });

  const tableWidth = ref(undefined);
  const aTableRef = ref(undefined);
  const columnsVisibleAdditionalSpaceForOneGrow = ref(0);
  const indexFirstScrollInvisibleColumn = ref(undefined);
  const columnsScrollInvisible = ref([]);

  const modelIsTableWithoutScrollStart = toRef(props, "modelIsTableWithoutScrollStart");
  const modelIsTableWithoutScroll = ref(modelIsTableWithoutScrollStart.value);
  const changeModelIsTableWithoutScroll = model => {
    modelIsTableWithoutScroll.value = model;
    emit("updateModelIsTableWithoutScroll", model);
  };

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
        if (isColumnVisible({ column: COLUMN })) {
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
      if (!isColumnVisible({ column })) {
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
        if (!isColumnVisible({ column: COLUMN })) {
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

  watch(isMobile, newValue => {
    if (newValue) {
      resizeOb.unobserve(aTableRef.value);
      setAllDefaultForMobile();
    } else {
      resizeOb.observe(aTableRef.value);
    }
  });

  onMounted(() => {
    if (!isMobile.value) {
      resizeOb.observe(aTableRef.value);
    }
  });
  onBeforeUnmount(() => {
    resizeOb.unobserve(aTableRef.value);
  });


  return {
    aTableRef,
    changeModelIsTableWithoutScroll,
    checkVisibleColumns,
    columnsVisibleAdditionalSpaceForOneGrow,
    columnsScrollInvisible,
    indexFirstScrollInvisibleColumn,
    modelIsTableWithoutScroll,
  };
}
