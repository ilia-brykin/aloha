import {
  computed,
  inject,
} from "vue";

export default function ColumnsCountAPI() {
  const columnsScrollInvisible = inject("columnsScrollInvisible");
  const modelIsTableWithoutScroll = inject("modelIsTableWithoutScroll");

  const countColumnsScrollInvisible = computed(() => {
    return columnsScrollInvisible.value.length;
  });

  const isColumnsScrollInvisibleDropdownVisible = computed(() => {
    if (modelIsTableWithoutScroll.value) {
      return countColumnsScrollInvisible.value > 0;
    }
    return false;
  });

  const columnsScrollInvisibleText = computed(() => {
    return countColumnsScrollInvisible.value === 1 ?
      "_A_TABLE_DROPDOWN_HIDE_FIELD_TEXT_" :
      "_A_TABLE_DROPDOWN_HIDE_FIELDS_TEXT_{{count}}_";
  });
  
  return {
    columnsScrollInvisibleText,
    countColumnsScrollInvisible,
    isColumnsScrollInvisibleDropdownVisible,
  };
}
