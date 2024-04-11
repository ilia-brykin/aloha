import {
  computed,
  inject,
} from "vue";

export default function StylesThTdAction() {
  const columnActionsWidthMinLocal = inject("columnActionsWidthMinLocal");
  const modelIsTableWithoutScroll = inject("modelIsTableWithoutScroll");

  const stylesThTd = computed(() => {
    if (modelIsTableWithoutScroll.value) {
      return {};
    }

    return {
      style: `width: ${ columnActionsWidthMinLocal.value }px;`,
    };
  });

  return {
    stylesThTd,
  };
}
