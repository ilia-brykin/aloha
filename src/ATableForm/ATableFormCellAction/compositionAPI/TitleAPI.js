import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isFunction,
} from "lodash-es";

export default function TitleAPI(props) {
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");
  const texts = toRef(props, "texts");
  const actionsTitleCallback = toRef(props, "actionsTitleCallback");

  const deleteTitle = computed(() => {
    const deleteTitleCallback = get(actionsTitleCallback.value, "delete");

    if (isFunction(deleteTitleCallback)) {
      return deleteTitleCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }

    return texts.value.actionDelete;
  });

  const editTitle = computed(() => {
    const editTitleCallback = get(actionsTitleCallback.value, "edit");

    if (isFunction(editTitleCallback)) {
      return editTitleCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }

    return texts.value.actionEdit;
  });

  return {
    deleteTitle,
    editTitle,
  };
}
