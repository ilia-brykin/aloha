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
  debounce,
} from "lodash-es";

const ACTIONS_COLUMN_WIDTH_SINGLE = 56;
const ACTIONS_COLUMN_WIDTH_DOUBLE = 112;
const DND_COLUMN_WIDTH = 56;

export default function ColumnsGrowAPI(props, {
  hasActionsColumn = computed(() => false),
}) {
  const columns = toRef(props, "columns");
  const id = toRef(props, "id");
  const isColumnsGrow = toRef(props, "isColumnsGrow");
  const isDeletable = toRef(props, "isDeletable");
  const isDeletableConfirm = toRef(props, "isDeletableConfirm");
  const isDragAndDrop = toRef(props, "isDragAndDrop");
  const isEditable = toRef(props, "isEditable");

  const {
    remPx,
    scalePxWithRem,
  } = ARemPxAPI();

  const tableWidth = ref(undefined);
  const columnsStylesGrow = ref({});

  const actionsColumnWidth = computed(() => {
    if (!hasActionsColumn.value) {
      return 0;
    }

    if (isEditable.value) {
      return ACTIONS_COLUMN_WIDTH_DOUBLE;
    }

    if (isDeletable.value || isDeletableConfirm.value) {
      return ACTIONS_COLUMN_WIDTH_SINGLE;
    }

    return 0;
  });

  const dndColumnWidth = computed(() => {
    return isDragAndDrop.value ? DND_COLUMN_WIDTH : 0;
  });

  const getObservedElement = () => {
    return document.getElementById(id.value)?.parentElement;
  };

  const parseWidthToPx = value => {
    if (value === undefined || value === null || value === "") {
      return 0;
    }

    if (typeof value === "number") {
      return +scalePxWithRem(value) || 0;
    }

    if (typeof value !== "string") {
      return 0;
    }

    const valueTrim = value.trim();
    if (!valueTrim) {
      return 0;
    }

    if (valueTrim.endsWith("rem")) {
      return (parseFloat(valueTrim) || 0) * remPx.value;
    }

    if (valueTrim.endsWith("px")) {
      return parseFloat(valueTrim) || 0;
    }

    return parseFloat(valueTrim) || 0;
  };

  const toWidthStyle = widthPx => {
    const width = `${ widthPx }px`;

    return {
      maxWidth: width,
      minWidth: width,
      width,
    };
  };

  const updateColumnsGrowStyles = () => {
    if (!isColumnsGrow.value || !tableWidth.value) {
      columnsStylesGrow.value = {};
      return;
    }

    const columnsLocal = columns.value || [];
    const tableWidthAvailable = tableWidth.value - actionsColumnWidth.value - dndColumnWidth.value;

    if (tableWidthAvailable <= 0) {
      columnsStylesGrow.value = {};
      return;
    }

    let columnsWidthSum = 0;
    let growSum = 0;

    columnsLocal.forEach(column => {
      const columnWidth = parseWidthToPx(column.width);
      columnsWidthSum += columnWidth;
      growSum += Math.max(0, +column.grow || 0);
    });

    if (columnsWidthSum >= tableWidthAvailable || growSum <= 0) {
      columnsStylesGrow.value = {};
      return;
    }

    const freeWidth = tableWidthAvailable - columnsWidthSum;
    const styles = {};

    columnsLocal.forEach(column => {
      const columnWidth = parseWidthToPx(column.width);
      const columnGrow = Math.max(0, +column.grow || 0);

      if (!column.id || !columnWidth) {
        return;
      }

      const widthPx = columnWidth + (columnGrow > 0 ? freeWidth * columnGrow / growSum : 0);
      styles[column.id] = toWidthStyle(widthPx);
    });

    columnsStylesGrow.value = styles;
  };

  const resizeObserver = new ResizeObserver(debounce(entries => {
    const width = entries[0]?.contentRect?.width;

    if (!width) {
      return;
    }

    tableWidth.value = width;
    updateColumnsGrowStyles();
  }, 100));

  onMounted(() => {
    const element = getObservedElement();

    if (!element) {
      return;
    }

    tableWidth.value = element.getBoundingClientRect().width;
    updateColumnsGrowStyles();
    resizeObserver.observe(element);
  });

  onBeforeUnmount(() => {
    const element = getObservedElement();

    if (!element) {
      return;
    }

    resizeObserver.unobserve(element);
  });

  watch([
    columns,
    hasActionsColumn,
    isColumnsGrow,
    isDeletable,
    isDeletableConfirm,
    isDragAndDrop,
    isEditable,
  ], () => {
    updateColumnsGrowStyles();
  }, {
    deep: true,
  });

  return {
    columnsStylesGrow,
  };
}
