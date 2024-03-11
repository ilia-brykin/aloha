import {
  computed,
  inject,
} from "vue";

export default function StylesThTdAction() {
  const columnActionsWidthMin = inject("columnActionsWidthMin");
  const modelIsTableWithoutScroll = inject("modelIsTableWithoutScroll");

  const stylesThTd = computed(() => {
    if (modelIsTableWithoutScroll.value) {
      return {};
    }

    return {
      style: `width: ${ columnActionsWidthMin.value }px;`,
    };
  });

  return {
    stylesThTd,
  };
}
