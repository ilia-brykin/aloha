import {
  computed,
  h, inject,
  toRef,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

export default function SortAPI(props) {
  const column = toRef(props, "column");
  const isSortingMultiColumn = toRef(props, "isSortingMultiColumn");
  const modelSort = toRef(props, "modelSort");

  const changeModelSort = inject("changeModelSort");
  const isLoadingTable = inject("isLoadingTable");

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
      if (!isSortAscending.value) {
        ICONS.push(iconSortDescending.value);
      }
      if (!isSortDescending.value) {
        ICONS.push(iconSortAscending.value);
      }
    }
    return ICONS;
  });

  const componentSortLocal = computed(() => {
    if (isSortable.value) {
      return "button";
    }
    return "span";
  });

  const changeModelSortLocal = $event => {
    if (isLoadingTable.value) {
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
        disabled: isLoadingTable.value,
        class: "a_btn a_btn_link a_table__th__sort",
        onClick: changeModelSortLocal,
      };
    }
    return {};
  });

  const sequenceNumberSort = computed(() => {
    if (!isSortingMultiColumn.value &&
      !isSorting.value) {
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

  // Klicken Sie hier, um zwischen aufsteigender, absteigender und keiner Sortierung zu wechseln.
  // Halten Sie die Umschalttaste beim Klicken gedrückt, um die Sortierung mehrerer Spalten zu kombinieren.

  return {
    ariaSort,
    attributesForButtonSort,
    componentSortLocal,
    iconsSortable,
    isSortable,
    isSorting,
    sequenceNumberSort,
  };
}
