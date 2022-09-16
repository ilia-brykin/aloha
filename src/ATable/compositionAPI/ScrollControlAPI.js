import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
  isNil,
} from "lodash-es";

export default function ScrollControlAPI(props, { emit }, {
  columnsOrdered = computed(() => []),
  isMultipleActionsActive = ref(undefined),
  modelColumnsVisibleMapping = computed(() => ({})),
}) {
  const columnWidthDefault = toRef(props, "columnWidthDefault");
  const columnActionsWidth = toRef(props, "columnActionsWidth");
  const isActionColumnVisible = toRef(props, "isActionColumnVisible");

  const columnActionsWidthLocal = computed(() => {
    if (isActionColumnVisible.value) {
      return columnActionsWidth.value;
    }
    return 0;
  });
  const columnsSpecialWidth = computed(() => {
    const columnMultipleActionsWidth = isMultipleActionsActive.value ? 50 : 0;
    return columnMultipleActionsWidth + columnActionsWidthLocal.value;
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
        if (modelColumnsVisibleMapping.value[COLUMN.id]) {
          COLUMNS_SCROLL_VISIBLE.push(cloneDeep(COLUMN));
        }
      }
      columnsScrollInvisible.value = COLUMNS_SCROLL_VISIBLE;
    }
  };

  const checkVisibleColumns = () => {
    const TABLE_WIDTH_WITHOUT_ACTIONS = tableWidth.value - columnsSpecialWidth.value;

    let columnsWidthInOrder = 0;
    let indexFirstScrollInvisibleColumnLocal = 0;
    let sumGrows = 0;
    forEach(columnsOrdered.value, column => {
      if (!modelColumnsVisibleMapping.value[column.id]) {
        indexFirstScrollInvisibleColumnLocal++;
        return;
      }
      const COLUMN_WIDTH = +column.width || columnWidthDefault.value;
      if (columnsWidthInOrder + COLUMN_WIDTH > TABLE_WIDTH_WITHOUT_ACTIONS) {
        return false;
      }
      columnsWidthInOrder += COLUMN_WIDTH;
      indexFirstScrollInvisibleColumnLocal++;
      sumGrows += isNil(column.grow) ? 1 : column.grow;
    });
    let freeSpaceWidth = 0;
    if (modelIsTableWithoutScroll.value) {
      freeSpaceWidth = TABLE_WIDTH_WITHOUT_ACTIONS - columnsWidthInOrder;
    } else if (indexFirstScrollInvisibleColumnLocal === columnsOrdered.value.length) {
      freeSpaceWidth = TABLE_WIDTH_WITHOUT_ACTIONS - columnsWidthInOrder;
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

    tableWidth.value = RECT.width;
    checkVisibleColumns();
  });

  onMounted(() => {
    resizeOb.observe(aTableRef.value);
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
