import {
  computed,
  inject,
  ref,
  toRef,
} from "vue";

import EventBus from "../../../utils/EventBus";
import {
  cloneDeep,
  forEach,
  last,
  startsWith,
} from "lodash-es";

export default function ModelAPI(props, {
  closeDropdown = () => {},
  countColumnsAll = computed(() => 0),
  initDataForForm = () => {},
  unappliedModelSort = ref([]),
  wasOpenDropdown = ref(false),
}) {
  const isSortingMultiColumn = toRef(props, "isSortingMultiColumn");
  const modelSort = toRef(props, "modelSort");

  const changeModelSort = inject("changeModelSort");
  const tableId = inject("tableId");

  const initUnappliedModelSort = ({ model } = {}) => {
    if (wasOpenDropdown.value && !model) {
      return;
    }
    wasOpenDropdown.value = true;

    const MODEL_SORT = model ? model : cloneDeep(modelSort.value);
    if (MODEL_SORT.length < countColumnsAll.value) {
      MODEL_SORT.push(undefined);
    }

    if (!isSortingMultiColumn.value) {
      if (MODEL_SORT.length > 1) {
        MODEL_SORT.length = 1;
      }
    }

    const UNAPPLIED_MODEL = [];
    forEach(MODEL_SORT, model => {
      const sortId = model ? model.replace(/^-/, "") : model;
      const sortMode = startsWith(model, "-") ?
        "desc" :
        "asc";
      UNAPPLIED_MODEL.push({
        sortId,
        sortMode,
      });
    });

    unappliedModelSort.value = UNAPPLIED_MODEL;
    initDataForForm({ unappliedModelSort: UNAPPLIED_MODEL });
  };

  const needAddModelUndefined = ({ model }) => {
    if (!isSortingMultiColumn.value || model.length >= countColumnsAll.value) {
      return false;
    }
    const MODEL_LAST_ITEM = last(model);
    return !!MODEL_LAST_ITEM.sortId;
  };

  const updateUnappliedModelSort = ({ model }) => {
    if (needAddModelUndefined({ model })) {
      model.push({
        sortId: undefined,
        sortMode: "asc",
      });
    }
    unappliedModelSort.value = model;
    initDataForForm({ unappliedModelSort: unappliedModelSort.value });
  };

  const removeUnappliedModelSort = ({ item }) => {
    const INDEX = item.additionalProps.index;
    const isLast = INDEX === unappliedModelSort.value.length - 1;
    if (isLast) {
      unappliedModelSort.value[INDEX].sortId = undefined;
    } else {
      unappliedModelSort.value.splice(INDEX, 1);
    }

    const LAST_INDEX_IN_MODEL = unappliedModelSort.value.length - 1;
    if (unappliedModelSort.value?.[LAST_INDEX_IN_MODEL]?.sortId) {
      unappliedModelSort.value.push({
        sortId: undefined,
        sortMode: "asc",
      });
    }
    initDataForForm({ unappliedModelSort: unappliedModelSort.value });
  };

  const changeModelSortInTable = () => {
    const MODEL = [];
    forEach(unappliedModelSort.value, modelItem => {
      if (modelItem.sortId) {
        MODEL.push(`${ modelItem.sortMode === "asc" ? "" : "-" }${ modelItem.sortId }`);
      }
    });
    changeModelSort({
      modelAll: MODEL,
    });
    closeDropdown();
  };

  const changeTableSorting = ({ modelSort = [], tableId: _tableId }) => {
    if (_tableId !== tableId.value) {
      return;
    }
    initUnappliedModelSort({ model: modelSort });
  };

  const initEventBus = () => {
    EventBus.$on("changeTableSorting", changeTableSorting);
  };

  const destroyEventBus = () => {
    EventBus.$off("changeTableSorting", changeTableSorting);
  };

  const countModelSort = computed(() => {
    return modelSort.value?.length || 0;
  });

  const textCountModelSort = computed(() => {
    if (countModelSort.value) {
      return countModelSort.value;
    }

    return undefined;
  });

  return {
    changeModelSortInTable,
    countModelSort,
    destroyEventBus,
    initEventBus,
    initUnappliedModelSort,
    removeUnappliedModelSort,
    textCountModelSort,
    updateUnappliedModelSort,
  };
}
