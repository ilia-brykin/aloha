import {
  computed,
  inject,
  toRef,
} from "vue";

export default function AttributesAPI(props, {
  ariaSort = computed(() => ({})),
  attributesForRoot = computed(() => ({})),
  columnsStyles = computed(() => ""),
  isLocked = computed(() => false),
  isSorting = computed(() => false),
  titlesSort = computed(() => []),
}) {
  const column = toRef(props, "column");
  const columnIndex = toRef(props, "columnIndex");
  const hasMultipleActions = toRef(props, "hasMultipleActions");

  const isColumnsDnd = inject("isLoadingOptions");
  const isLoadingOptions = inject("isLoadingOptions");


  const classForTh = computed(() => {
    return [
      "a_table__th a_table__cell",
      {
        a_table__th_draggable: !isLocked.value && !isLoadingOptions.value && isColumnsDnd.value,
        a_table__th_sorting: isSorting.value,
      },
      column.value.classHeaderParent,
    ];
  });

  const titlesLocal = computed(() => {
    const TITLES = [];
    if (column.value.title ||
      column.value.title === 0) {
      TITLES.push(column.value.title);
    }
    TITLES.push(...titlesSort.value);

    return TITLES;
  });

  const attributesForTh = computed(() => {
    let ariaColindex = columnIndex.value + 1;
    if (hasMultipleActions.value) {
      ariaColindex++;
    }
    return {
      ...ariaSort.value,
      ...attributesForRoot.value,
      "aria-colindex": ariaColindex,
      ref: "root",
      role: "columnheader",
      class: classForTh.value,
      style: columnsStyles.value,
    };
  });

  return {
    attributesForTh,
    titlesLocal,
  };
}
