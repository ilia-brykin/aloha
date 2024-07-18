import {
  computed, ref,
  toRef,
} from "vue";

import AKeyId from "../../const/AKeyId";
import AKeyLabel from "../../const/AKeyLabel";
import {
  getTranslatedText,
  isPlaceholderTranslate,
} from "../../ATranslation/compositionAPI/UtilsAPI";
import {
  isArrayOfArrays,
} from "../../utils/utils";
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
  const translateData = toRef(props, "translateData");

  const dataFromServer = ref([]);

  const isArrayOfArraysDataExtra = computed(() => {
    return isArrayOfArrays(dataExtra.value);
  });

  const prepareData = ({ _data, _isArrayOfArrays = false }) => {
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
    return data.value || dataFromServer.value;
  });

  const dataLocal = computed(() => {
    return prepareData({
      _data: dataComputed.value,
      _isArrayOfArrays: false,
    });
  });

  const dataExtraLocal = computed(() => {
    return prepareData({
      _data: dataExtra.value,
      _isArrayOfArrays: isArrayOfArraysDataExtra.value,
    });
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
