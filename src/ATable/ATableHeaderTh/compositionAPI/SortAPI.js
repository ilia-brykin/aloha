import {
  computed,
  h,
  inject,
  toRef,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

import {
  tablePluginOptions,
} from "../../../plugins/ATablePlugin";

export default function SortAPI(props) {
  const column = toRef(props, "column");
  const columnIndex = toRef(props, "columnIndex");
  const disabledSort = toRef(props, "disabledSort");
  const isSortingMultiColumn = toRef(props, "isSortingMultiColumn");
  const modelSort = toRef(props, "modelSort");
  const showFirstSortingSequenceNumber = toRef(props, "showFirstSortingSequenceNumber");

  const changeModelSort = inject("changeModelSort");
  const tableId = inject("tableId");

  const sortId = computed(() => {
    return column.value.sortId;
  });

  const isSortable = computed(() => {
    return !!sortId.value;
  });

  const modelSortIndexAscending = computed(() => {
    return modelSort.value.indexOf(sortId.value);
  });

  const modelSortIndexDescending = computed(() => {
    return modelSort.value.indexOf(`-${ sortId.value }`);
  });

  const isSortAscending = computed(() => {
    return modelSortIndexAscending.value !== -1;
  });

  const isSortDescending = computed(() => {
    return modelSortIndexDescending.value !== -1;
  });

  const isSorting = computed(() => {
    return isSortable.value &&
      (isSortAscending.value ||
        isSortDescending.value);
  });

  const ariaSort = computed(() => {
    if (isSortable.value) {
      let ariaSortValue = "none";
      if (isSortAscending.value) {
        ariaSortValue = "ascending";
      } else if (isSortDescending.value) {
        ariaSortValue = "descending";
      }
      return {
        "aria-sort": ariaSortValue,
      };
    }
    return {};
  });

  const iconSortDescending = computed(() => {
    return h(AIcon, {
      icon: "CaretUpFill",
      class: "a_table__th__sort__icon a_table__th__sort__icon_up",
    });
  });

  const iconSortAscending = computed(() => {
    return h(AIcon, {
      icon: "CaretDownFill",
      class: "a_table__th__sort__icon a_table__th__sort__icon_down",
    });
  });

  const iconsSortable = computed(() => {
    const ICONS = [];
    if (isSortable.value) {
      if (!isSortDescending.value) {
        ICONS.push(iconSortDescending.value);
      }
      if (!isSortAscending.value) {
        ICONS.push(iconSortAscending.value);
      }
    }
    return ICONS;
  });

  const changeModelSortLocal = ({ $event }) => {
    if (disabledSort.value) {
      return;
    }
    changeModelSort({
      $event,
      sortId: sortId.value,
    });
  };

  const columnTextScreenReaderId = computed(() => {
    return `${ tableId.value }_th_${ columnIndex.value }_screen_reader`;
  });

  const attributesForButtonSort = computed(() => {
    if (isSortable.value) {
      return {
        type: "button",
        disabled: disabledSort.value,
        isTitleHtml: tablePluginOptions.value.config?.isHtmlTitleSort || false,
        "aria-describedby": columnTextScreenReaderId.value,
        onClick: changeModelSortLocal,
      };
    }
    return {
      tag: "span",
    };
  });

  const sequenceNumberSort = computed(() => {
    if (!isSortingMultiColumn.value &&
      !isSorting.value) {
      return undefined;
    }
    if (modelSort.value.length <= 1 &&
      !showFirstSortingSequenceNumber.value) {
      return undefined;
    }
    if (modelSortIndexAscending.value !== -1) {
      return modelSortIndexAscending.value + 1;
    }
    if (modelSortIndexDescending.value !== -1) {
      return modelSortIndexDescending.value + 1;
    }
    return undefined;
  });

  const titlesSort = computed(() => {
    const TITLES = [];
    if (isSortable.value) {
      TITLES.push("_A_TABLE_SORT_TITLE_");
      if (isSortingMultiColumn.value) {
        TITLES.push("_A_TABLE_SORT_TITLE_MULTI_COLUMN_");
      }
    }
    return TITLES;
  });

  return {
    ariaSort,
    attributesForButtonSort,
    columnTextScreenReaderId,
    iconsSortable,
    isSortable,
    isSorting,
    sequenceNumberSort,
    titlesSort,
  };
}
