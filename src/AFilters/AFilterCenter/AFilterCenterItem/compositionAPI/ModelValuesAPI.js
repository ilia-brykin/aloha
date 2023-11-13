import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../../compositionAPI/AFiltersAPI";

import AKeyLabel from "../../../../const/AKeyLabel";
import AUiTypesModelArray from "../../../../ui/const/AUiTypesModelArray";
import TypesNumberRange from "../../../../ui/AInputNumberRange/utils/Types";
import {
  forEach,
  get, isNil,
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
    if (AUiTypesModelArray[filter.value.type] ||
      (filter.value.type === "radio" && filter.value.isModelArray)) {
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
    if (filter.value.type === "dateRange") {
      const KEY_FROM = filter.value.keyFrom || "from";
      const KEY_UNTIL = filter.value.keyUntil || "until";
      const MODEL_VALUES = [];
      if (!isNil(model.value?.[KEY_FROM]) && model.value?.[KEY_FROM] !== "") {
        MODEL_VALUES.push({
          label: filterDate(model.value[KEY_FROM]),
          filterLabelSuffix: filter.value.labelFrom || "_A_DATEPICKER_RANGE_FROM_",
          idSuffix: "_from",
          keyId: KEY_FROM,
        });
      }
      if (!isNil(model.value?.[KEY_UNTIL]) && model.value?.[KEY_UNTIL] !== "") {
        MODEL_VALUES.push({
          label: filterDate(model.value[KEY_UNTIL]),
          filterLabelSuffix: filter.value.labelUntil || "_A_DATEPICKER_RANGE_UNTIL_",
          idSuffix: "_until",
          keyId: KEY_UNTIL,
        });
      }
      return MODEL_VALUES;
    }

    if (TypesNumberRange.indexOf(filter.value.type) !== -1) {
      const KEY_MAX = filter.value.keyMax || "max";
      const KEY_MIN = filter.value.keyMin || "min";
      const MODEL_VALUES = [];
      if (!isNil(model.value?.[KEY_MIN]) && model.value?.[KEY_MIN] !== "") {
        MODEL_VALUES.push({
          label: model.value[KEY_MIN],
          filterLabelSuffix: filter.value.labelMin || "_A_INPUT_NUMBER_RANGE_LABEL_MIN_",
          idSuffix: "_min",
          keyId: KEY_MIN,
        });
      }
      if (!isNil(model.value?.[KEY_MAX]) && model.value?.[KEY_MAX] !== "") {
        MODEL_VALUES.push({
          label: model.value[KEY_MAX],
          filterLabelSuffix: filter.value.labelMax || "_A_INPUT_NUMBER_RANGE_LABEL_MAX_",
          idSuffix: "_max",
          keyId: KEY_MAX,
        });
      }
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
