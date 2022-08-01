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

export default function ScrollControlAPI(props, {
  columnsOrdered = computed(() => []),
  modelColumnsVisibleMapping = computed(() => ({})),
}) {
  const columnWidthDefault = toRef(props, "columnWidthDefault");
  const columnActionsWidth = toRef(props, "columnActionsWidth");

  const tableWidth = ref(undefined);
  const aTableRef = ref(undefined);
  const columnsVisibleAdditionalSpaceForOneGrow = ref(0);
  const indexFirstScrollInvisibleColumn = ref(undefined);
  const columnsScrollInvisible = ref([]);

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
    console.log("checkVisibleColumns");
    const TABLE_WIDTH_WITHOUT_ACTIONS = tableWidth.value - columnActionsWidth.value;

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
    const FREE_SPACE_WIDTH = TABLE_WIDTH_WITHOUT_ACTIONS - columnsWidthInOrder;
    indexFirstScrollInvisibleColumn.value = indexFirstScrollInvisibleColumnLocal;

    setAdditionalSpaceColumnsForOneGrow({
      sumGrows,
      freeSpaceWidth: FREE_SPACE_WIDTH,
    });
    setColumnsScrollInvisible();
  };


  const resizeOb = new ResizeObserver(entries => {
    // since we are observing only a single element, so we access the first element in entries array
    const RECT = entries[0].contentRect;

    tableWidth.value = RECT.width;
    console.log("Current Width : " + tableWidth.value);
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
    checkVisibleColumns,
    columnsVisibleAdditionalSpaceForOneGrow,
    columnsScrollInvisible,
    indexFirstScrollInvisibleColumn,
  };
}
