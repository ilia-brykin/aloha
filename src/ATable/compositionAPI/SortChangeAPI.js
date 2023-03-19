import {
  computed,
  ref,
  toRef,
} from "vue";

export default function SortChangeAPI(props, { emit }, {
  modelSortLocal = ref([]),
  setEmptySelectedRowsIndexes = () => {},
  closePreviewAll = () => {},
}) {
  const isSortingMultiColumn = toRef(props, "isSortingMultiColumn");
  const sortingMultiColumnKey = toRef(props, "sortingMultiColumnKey");

  const sortingMultiColumnKeyName = computed(() => {
    return `${ sortingMultiColumnKey.value }Key`;
  });

  const isSortingMultiColumnKeyPressed = $event => {
    return isSortingMultiColumn.value &&
      $event[sortingMultiColumnKeyName.value];
  };

  const changeModelSortMultiColumn = ({ sortId }) => {
    const INDEX_SORT_ID = modelSortLocal.value.indexOf(sortId);
    if (INDEX_SORT_ID !== -1) {
      modelSortLocal.value.splice(INDEX_SORT_ID, 1, `-${ sortId }`);
      return;
    }
    const INDEX_MINUS_SORT_ID = modelSortLocal.value.indexOf(`-${ sortId }`);
    if (INDEX_MINUS_SORT_ID !== -1) {
      modelSortLocal.value.splice(INDEX_MINUS_SORT_ID, 1);
      return;
    }
    modelSortLocal.value.push(sortId);
  };

  const changeModelSortSingleColumn = ({ sortId }) => {
    const INDEX_SORT_ID = modelSortLocal.value.indexOf(sortId);
    if (INDEX_SORT_ID !== -1) {
      modelSortLocal.value = [`-${ sortId }`];
      return;
    }
    const INDEX_MINUS_SORT_ID = modelSortLocal.value.indexOf(`-${ sortId }`);
    if (INDEX_MINUS_SORT_ID !== -1) {
      modelSortLocal.value = [];
      return;
    }
    modelSortLocal.value = [sortId];
  };

  const changeModelSort = ({ sortId, $event }) => {
    if (isSortingMultiColumnKeyPressed($event)) {
      changeModelSortMultiColumn({ sortId });
    } else {
      changeModelSortSingleColumn({ sortId });
    }
    emit("changeSorting", {
      modelSort: modelSortLocal.value,
    });
    setEmptySelectedRowsIndexes();
    closePreviewAll();
  };

  return {
    changeModelSort,
  };
}
