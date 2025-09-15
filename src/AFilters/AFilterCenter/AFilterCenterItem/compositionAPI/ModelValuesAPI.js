import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../../compositionAPI/AFiltersAPI";
import {
  getTranslatedText,
} from "../../../../ATranslation/compositionAPI/UtilsAPI";

import TypesNumberRange from "../../../../ui/AInputNumberRange/utils/Types";
import {
  AKeyLabel,
} from "../../../../const/AKeys";
import {
  typesModelArray,
} from "../../../../ui/const/AUiTypes";
import {
  filter as _filter,
  get,
  isFunction,
  isNil,
} from "lodash-es";


export default function ModelValuesAPI(props, {
  filterLabel = computed(() => ""),
  filterLabelForTitle = computed(() => ""),
  hasCurrentFilter = computed(() => false),
}) {
  const dataKeyByKeyIdPerFilter = toRef(props, "dataKeyByKeyIdPerFilter");
  const filter = toRef(props, "filter");
  const model = toRef(props, "model");

  const {
    filterBoolean,
    filterDate,
  } = AFiltersAPI();

  const filterDataKey = computed(() => {
    if (filter.value) {
      return dataKeyByKeyIdPerFilter.value[filter.value.id];
    }
    return undefined;
  });

  const modelArrayReal = computed(() => {
    if (model.value?.length) {
      return _filter(model.value, modelItem => {
        return filterDataKey.value && filterDataKey.value[modelItem];
      });
    }
    return [];
  });

  const getTranslatedLabelWithSuffix = ({ label, suffixTranslated }) => {
    const LABEL_TRANSLATED = getTranslatedText({
      placeholder: label,
    });
    if (!suffixTranslated) {
      return LABEL_TRANSLATED;
    }

    return `${ LABEL_TRANSLATED } ${ suffixTranslated }`;
  };

  const modelValuesForCurrentFilter = computed(() => {
    if (!hasCurrentFilter.value) {
      return [];
    }
    if (filter.value.type === "switch" ||
      filter.value.type === "oneCheckbox") {
      return [{
        filterLabelTranslated: getTranslatedLabelWithSuffix({ label: filterLabel.value }),
        filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({ label: filterLabelForTitle.value }),
        label: filterBoolean(model.value),
      }];
    }
    if (filter.value.type === "date") {
      return [{
        filterLabelTranslated: getTranslatedLabelWithSuffix({ label: filterLabel.value }),
        filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({ label: filterLabelForTitle.value }),
        label: filterDate(model.value),
      }];
    }

    if (filter.value.type === "select" ||
      filter.value.type === "radio") {
      const LABEL = get(filterDataKey.value, `${ model.value }.${ AKeyLabel }`);
      if (LABEL) {
        return [{
          filterLabelTranslated: getTranslatedLabelWithSuffix({ label: filterLabel.value }),
          filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({ label: filterLabelForTitle.value }),
          label: LABEL,
        }];
      }
      return [];
    }
    if (typesModelArray.value[filter.value.type] ||
      (filter.value.type === "radio" && filter.value.isModelArray)) {
      if (modelArrayReal.value.length) {
        if (modelArrayReal.value.length === 1) {
          const item = filterDataKey.value?.[modelArrayReal.value[0]];

          let label = item?.[AKeyLabel];
          if (filter.value.mode === "one_per_group" && filter.value.keyGroup) {
            const GROUP = get(item, filter.value.keyGroup);
            if (isFunction(filter.value.keyGroupCallback)) {
              label = `${ filter.value.keyGroupCallback({ item, inDropdown: false, group: GROUP }) } "${ label }"`;
            } else {
              label = `${ GROUP } "${ label }"`;
            }
          }

          return [{
            filterLabelTranslated: getTranslatedLabelWithSuffix({ label: filterLabel.value }),
            filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({ label: filterLabelForTitle.value }),
            label,
            item,
            modelArray: modelArrayReal.value,
          }];
        }
        return [{
          filterLabelTranslated: getTranslatedLabelWithSuffix({ label: filterLabel.value }),
          filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({ label: filterLabelForTitle.value }),
          label: getTranslatedText({
            placeholder: "_A_FILTERS_SELECTED_{{count}}_",
            extra: {
              count: modelArrayReal.value.length,
              modelArray: modelArrayReal.value,
            },
          }),
          modelArray: modelArrayReal.value,
          extra: {
            count: modelArrayReal.value.length,
            modelArray: modelArrayReal.value,
          },
        }];
      }
      return [];
    }

    if (filter.value.type === "dateRange") {
      const KEY_FROM = filter.value.keyFrom || "from";
      const KEY_UNTIL = filter.value.keyUntil || "until";
      const MODEL_VALUES = [];
      if (!isNil(model.value?.[KEY_FROM]) && model.value?.[KEY_FROM] !== "") {
        const SUFFIX_TRANSLATED = getTranslatedText({
          placeholder: filter.value.labelFrom || "_A_DATEPICKER_RANGE_FROM_",
        });
        MODEL_VALUES.push({
          filterLabelTranslated: getTranslatedLabelWithSuffix({
            label: filterLabel.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({
            label: filterLabelForTitle.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          label: filterDate(model.value[KEY_FROM]),
          idSuffix: "_from",
          keyId: KEY_FROM,
        });
      }
      if (!isNil(model.value?.[KEY_UNTIL]) && model.value?.[KEY_UNTIL] !== "") {
        const SUFFIX_TRANSLATED = getTranslatedText({
          placeholder: filter.value.labelUntil || "_A_DATEPICKER_RANGE_UNTIL_",
        });
        MODEL_VALUES.push({
          filterLabelTranslated: getTranslatedLabelWithSuffix({
            label: filterLabel.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({
            label: filterLabelForTitle.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          label: filterDate(model.value[KEY_UNTIL]),
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
        const SUFFIX_TRANSLATED = getTranslatedText({
          placeholder: filter.value.labelMin || "_A_INPUT_NUMBER_RANGE_LABEL_MIN_",
        });

        MODEL_VALUES.push({
          filterLabelTranslated: getTranslatedLabelWithSuffix({
            label: filterLabel.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({
            label: filterLabelForTitle.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          label: model.value[KEY_MIN],
          idSuffix: "_min",
          keyId: KEY_MIN,
        });
      }
      if (!isNil(model.value?.[KEY_MAX]) && model.value?.[KEY_MAX] !== "") {
        const SUFFIX_TRANSLATED = getTranslatedText({
          placeholder: filter.value.labelMax || "_A_INPUT_NUMBER_RANGE_LABEL_MAX_",
        });

        MODEL_VALUES.push({
          filterLabelTranslated: getTranslatedLabelWithSuffix({
            label: filterLabel.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({
            label: filterLabelForTitle.value,
            suffixTranslated: SUFFIX_TRANSLATED,
          }),
          label: model.value[KEY_MAX],
          idSuffix: "_max",
          keyId: KEY_MAX,
        });
      }
      return MODEL_VALUES;
    }
    return [{
      label: model.value,
      filterLabelTranslated: getTranslatedLabelWithSuffix({ label: filterLabel.value }),
      filterLabelForTitleTranslated: getTranslatedLabelWithSuffix({ label: filterLabelForTitle.value }),
    }];
  });

  return {
    modelValuesForCurrentFilter,
  };
}
