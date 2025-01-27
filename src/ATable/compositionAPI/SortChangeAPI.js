import {
  computed,
  ref,
  toRef,
} from "vue";

import EventBus from "../../utils/EventBus";
import {
  cloneDeep,
} from "lodash-es";

export default function SortChangeAPI(props, { emit }, {
  modelSortLocal = ref([]),
  closePreviewAll = () => {
  },
}) {
  const id = toRef(props, "id");
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

  const changeModelSort = ({ sortId, $event, modelAll }) => {
    if (modelAll) {
      modelSortLocal.value = modelAll;
    } else if (isSortingMultiColumnKeyPressed($event)) {
      changeModelSortMultiColumn({ sortId });
    } else {
      changeModelSortSingleColumn({ sortId });
    }

    emit("changeSorting", {
      modelSort: cloneDeep(modelSortLocal.value),
    });
    EventBus.$emit("changeTableSorting", {
      modelSort: cloneDeep(modelSortLocal.value),
      tableId: id.value,
    });
    closePreviewAll();
  };

  return {
    changeModelSort,
  };
}
