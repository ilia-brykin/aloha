import {
  computed,
  ref,
  toRef, watch,
} from "vue";

import {
  cloneDeep,
  forEach,
  isArray,
  isString,
  orderBy,
  startsWith,
} from "lodash-es";

export default function SortAPI(props, {
  viewCurrent = computed(() => ({})),
}) {
  const data = toRef(props, "data");
  const isSortingOutside = toRef(props, "isSortingOutside");
  const modelSort = toRef(props, "modelSort");
  const useAdditionalSorting = toRef(props, "useAdditionalSorting");

  const modelSortLocal = ref([]);

  const useAdditionalSortingLocal = computed(() => {
    if (useAdditionalSorting.value) {
      if (viewCurrent.value) {
        return viewCurrent.value.useAdditionalSorting || false;
      }
      return true;
    }
    return false;
  });

  const initModelSort = () => {
    if (isString(modelSort.value)) {
      modelSortLocal.value = [modelSort.value];
    } else if (isArray(modelSort.value)) {
      modelSortLocal.value = cloneDeep(modelSort.value);
    }
  };

  const sortOptions = computed(() => {
    const OPTIONS = {
      models: [],
      directions: [],
    };
    if (modelSortLocal.value.length) {
      forEach(modelSortLocal.value, model => {
        let directionSort = "asc";
        let modelSortLocal = model;
        if (startsWith(model, "-")) {
          directionSort = "desc";
          modelSortLocal = model.slice(1);
        }
        OPTIONS.models.push(modelSortLocal);
        OPTIONS.directions.push(directionSort);
      });
    }
    return OPTIONS;
  });

  const dataSorted = computed(() => {
    if (modelSortLocal.value.length &&
      !isSortingOutside.value) {
      return orderBy(data.value || [], sortOptions.value.models, sortOptions.value.directions);
    }
    return data.value || [];
  });

  watch(modelSort, () => {
    initModelSort();
  });

  return {
    dataSorted,
    initModelSort,
    modelSortLocal,
    useAdditionalSortingLocal,
  };
}
