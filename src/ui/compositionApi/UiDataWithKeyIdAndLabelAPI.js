import {
  computed,
  inject,
  ref,
  toRef,
} from "vue";
import {
  AKeyId,
  AKeyLabel,
  AKeyLabelSearch,
  extractTextFromHtml,
  getTranslatedText,
  isArrayOfArrays,
  isPlaceholderTranslate,
} from "../../index";

import {
  AIsDataPreparedInjection,
} from "../const/UiInjectionKeys";
import {
  cloneDeep,
  forEach,
  get,
  keyBy,
} from "lodash-es";

export default function UiDataWithKeyIdAndLabelAPI(props) {
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const data = toRef(props, "data");
  const dataExtra = toRef(props, "dataExtra");
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const keyId = toRef(props, "keyId");
  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");
  const searchTextInHtml = toRef(props, "searchTextInHtml");
  const translateData = toRef(props, "translateData");

  const isDataPrepared = inject(AIsDataPreparedInjection, false);

  const dataFromServer = ref([]);

  const isArrayOfArraysDataExtra = computed(() => {
    return isArrayOfArrays(dataExtra.value);
  });

  const prepareDataLabelSearch = ({ _data }) => {
    forEach(_data, item => {
      item[AKeyLabelSearch] = extractTextFromHtml(item[AKeyLabel]);
    });
    return _data;
  };

  const prepareData = ({ _data, _isArrayOfArrays = false }) => {
    if (isDataPrepared.value) {
      return _data;
    }

    const DATA = cloneDeep(_data);
    if (_isArrayOfArrays) {
      const DATA_LOCAL = [];
      forEach(DATA, item => {
        const ID = item[0];
        let label = item[1];
        if (translateData.value && isPlaceholderTranslate(label)) {
          label = getTranslatedText({ placeholder: label, alwaysTranslate: alwaysTranslate.value });
        }
        DATA_LOCAL.push({
          [AKeyId]: ID,
          [AKeyLabel]: label,
        });
      });
      return DATA_LOCAL;
    }
    if (keyLabelCallback.value) {
      if (isDataSimpleArray.value) {
        const DATA_LOCAL = [];
        forEach(DATA, item => {
          let label = keyLabelCallback.value({ item });
          if (translateData.value && isPlaceholderTranslate(label)) {
            label = getTranslatedText({ placeholder: label, alwaysTranslate: alwaysTranslate.value });
          }
          DATA_LOCAL.push({
            [AKeyId]: item,
            [AKeyLabel]: label,
          });
        });
        return DATA_LOCAL;
      }
      forEach(DATA, item => {
        let label = keyLabelCallback.value({ item });
        if (translateData.value && isPlaceholderTranslate(label)) {
          label = getTranslatedText({ placeholder: label, alwaysTranslate: alwaysTranslate.value });
        }
        item[AKeyId] = get(item, keyId.value);
        item[AKeyLabel] = label;
      });
    } else {
      if (isDataSimpleArray.value) {
        const DATA_LOCAL = [];
        forEach(DATA, item => {
          let label = item;
          if (translateData.value && isPlaceholderTranslate(label)) {
            label = getTranslatedText({ placeholder: label, alwaysTranslate: alwaysTranslate.value });
          }
          DATA_LOCAL.push({
            [AKeyId]: item,
            [AKeyLabel]: label,
          });
        });
        return DATA_LOCAL;
      }
      forEach(DATA, item => {
        let label = get(item, keyLabel.value);
        if (translateData.value && isPlaceholderTranslate(label)) {
          label = getTranslatedText({ placeholder: label, alwaysTranslate: alwaysTranslate.value });
        }
        item[AKeyId] = get(item, keyId.value);
        item[AKeyLabel] = label;
      });
    }
    return DATA;
  };

  const dataComputed = computed(() => {
    if (dataFromServer.value.length) {
      return dataFromServer.value;
    }

    return data.value;
  });

  const dataLocal = computed(() => {
    let _data = prepareData({
      _data: dataComputed.value,
      _isArrayOfArrays: false,
    });

    if (searchTextInHtml.value) {
      _data = prepareDataLabelSearch({ _data });
    }

    return _data;
  });

  const dataExtraLocal = computed(() => {
    let _data = prepareData({
      _data: dataExtra.value,
      _isArrayOfArrays: isArrayOfArraysDataExtra.value,
    });

    if (searchTextInHtml.value) {
      _data = prepareDataLabelSearch({ _data });
    }

    return _data;
  });

  const dataExtraKeyByKeyId = computed(() => {
    return keyBy(dataExtraLocal.value, AKeyId);
  });

  const dataKeyByKeyId = computed(() => {
    return keyBy(dataLocal.value, AKeyId);
  });

  const dataKeyByKeyIdLocal = computed(() => {
    return {
      ...dataExtraKeyByKeyId.value,
      ...dataKeyByKeyId.value,
    };
  });

  const dataAll = computed(() => {
    return [
      ...dataExtraLocal.value,
      ...dataLocal.value,
    ];
  });

  const hasDataExtra = computed(() => {
    return dataExtraLocal.value.length > 0;
  });

  return {
    dataAll,
    dataExtraLocal,
    dataFromServer,
    dataKeyByKeyIdLocal,
    dataLocal,
    hasDataExtra,
  };
}
