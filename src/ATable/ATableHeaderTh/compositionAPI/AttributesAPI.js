import {
  computed,
  inject, toRef,
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

  const isColumnsDnd = inject("isLoadingOptions");
  const isLoadingOptions = inject("isLoadingOptions");

  const classForTh = computed(() => {
    return [
      "a_table__th a_table__cell",
      {
        a_table__th_draggable: !isLocked.value && !isLoadingOptions.value && isColumnsDnd.value,
        a_table__th_sorting: isSorting.value,
      }
    ];
  });

  const attributesForTh = computed(() => {
    const ATTRIBUTES = {
      ...ariaSort.value,
      ...attributesForRoot.value,
      scope: "col",
      ref: "root",
      role: "columnheader",
    };
    ATTRIBUTES.class = classForTh.value;
    ATTRIBUTES.style = columnsStyles.value;
    return ATTRIBUTES;
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

  return {
    attributesForTh,
    titlesLocal,
  };
}
