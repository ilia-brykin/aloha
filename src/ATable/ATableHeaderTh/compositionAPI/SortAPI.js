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
  const disabledSort = toRef(props, "disabledSort");
  const isSortingMultiColumn = toRef(props, "isSortingMultiColumn");
  const modelSort = toRef(props, "modelSort");
  const showFirstSortingSequenceNumber = toRef(props, "showFirstSortingSequenceNumber");

  const changeModelSort = inject("changeModelSort");

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
      let ariaSort = "none";
      if (isSortAscending.value) {
        ariaSort = "ascending";
      } else if (isSortDescending.value) {
        ariaSort = "descending";
      }
      return {
        "aria-sort": ariaSort,
      };
    }
    return {};
  });

  const iconSortDescending = computed(() => {
    return h(AIcon, {
      icon: "ChevronUp",
      class: "a_table__th__sort__icon a_table__th__sort__icon_up",
    });
  });

  const iconSortAscending = computed(() => {
    return h(AIcon, {
      icon: "ChevronDown",
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

  const changeModelSortLocal = $event => {
    if (disabledSort.value) {
      return;
    }
    changeModelSort({
      $event,
      sortId: sortId.value,
    });
  };

  const attributesForButtonSort = computed(() => {
    if (isSortable.value) {
      return {
        type: "button",
        disabled: disabledSort.value,
        class: "a_btn a_btn_link a_table__th__sort",
        isTitleHtml: tablePluginOptions.value.config?.isHtmlTitleSort || false,
        // ariaLabel: "Bla bla", // TODO: Barrierefreiheit
        // "aria-describedby": "alohaTest",
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
    iconsSortable,
    isSortable,
    isSorting,
    sequenceNumberSort,
    titlesSort,
  };
}
