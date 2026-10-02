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

const CaretDownFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>`;
const CaretUpFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>`;

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
      icon: CaretUpFill,
      class: "a_table__th__sort__icon a_table__th__sort__icon_up",
    });
  });

  const iconSortAscending = computed(() => {
    return h(AIcon, {
      icon: CaretDownFill,
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
