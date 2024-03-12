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
  hasLastSelectOnlyOneColumn = computed(() => false),
  initDataForForm = () => {},
  wasOpenDropdown = ref(false),
}) {
  const modelSort = toRef(props, "modelSort");

  const changeModelSort = inject("changeModelSort");
  const tableId = inject("tableId");

  const unappliedModelSort = ref([]);

  const initUnappliedModelSort = ({ model } = {}) => {
    if (wasOpenDropdown.value && !model) {
      return;
    }
    wasOpenDropdown.value = true;

    const MODEL_SORT = model ? model : cloneDeep(modelSort.value);
    MODEL_SORT.push(undefined);

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

  const isLastModelForColumnNotEmpty = ({ model }) => {
    const LAST_MODEL = last(model);

    return !!LAST_MODEL.sortId;
  };

  const updateUnappliedModelSort = ({ model }) => {
    if (isLastModelForColumnNotEmpty({ model }) && !hasLastSelectOnlyOneColumn.value) {
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
    unappliedModelSort.value.splice(INDEX, 1);
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
    unappliedModelSort,
    updateUnappliedModelSort,
  };
}
