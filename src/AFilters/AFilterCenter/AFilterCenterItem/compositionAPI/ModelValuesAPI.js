import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../../compositionAPI/AFiltersAPI";

import AKeyLabel from "../../../../ui/const/AKeyLabel";
import AUiTypesModelArray from "../../../../ui/const/AUiTypesModelArray";
import {
  forEach,
  get,
} from "lodash-es";


export default function ModelValuesAPI(props, {
  hasCurrentFilter = computed(() => false),
}) {
  const dataKeyByKeyIdPerFilter = toRef(props, "dataKeyByKeyIdPerFilter");
  const filter = toRef(props, "filter");
  const model = toRef(props, "model");

  const filterDataKey = computed(() => {
    if (filter.value) {
      return dataKeyByKeyIdPerFilter.value[filter.value.id];
    }
    return undefined;
  });

  const {
    filterBoolean,
    filterDate,
  } = AFiltersAPI();

  const modelValuesForCurrentFilter = computed(() => {
    if (!hasCurrentFilter.value) {
      return [];
    }
    if (filter.value.type === "switch" ||
      filter.value.type === "oneCheckbox") {
      return [{
        label: filterBoolean(model.value),
      }];
    }
    if (filter.value.type === "date") {
      return [{
        label: filterDate(model.value),
      }];
    }
    if (filter.value.type === "select" ||
      filter.value.type === "radio") {
      const LABEL = get(filterDataKey.value, `${ model.value }.${ AKeyLabel }`);
      if (LABEL) {
        return [{
          label: LABEL,
        }];
      }
      return [];
    }
    if (AUiTypesModelArray[filter.value.type]) {
      const MODEL_VALUES = [];
      forEach(model.value, modelItem => {
        if (filterDataKey.value && filterDataKey.value[modelItem]) {
          MODEL_VALUES.push({
            label: filterDataKey.value[modelItem][AKeyLabel],
            value: modelItem,
            item: filterDataKey.value[modelItem],
          });
        }
      });
      return MODEL_VALUES;
    }
    return [{
      label: model.value,
    }];
  });

  return {
    modelValuesForCurrentFilter,
  };
}
