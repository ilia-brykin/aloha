import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../const/AKeyId";
import AKeyLabel from "../const/AKeyLabel";
import {
  getTranslatedText,
  isPlaceholderTranslate,
} from "../../ATranslation/compositionAPI/UtilsAPI";
import {
  cloneDeep,
  forEach,
  get,
  keyBy,
} from "lodash-es";

export default function UiDataWithKeyIdAndLabelAPI(props) {
  const data = toRef(props, "data");
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const keyId = toRef(props, "keyId");
  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");
  const translateData = toRef(props, "translateData");

  const dataLocal = computed(() => {
    const DATA = cloneDeep(data.value);
    if (keyLabelCallback.value) {
      if (isDataSimpleArray.value) {
        const DATA_LOCAL = [];
        forEach(DATA, item => {
          let label = keyLabelCallback.value({ item });
          if (translateData.value && isPlaceholderTranslate(label)) {
            label = getTranslatedText({ placeholder: label });
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
          label = getTranslatedText({ placeholder: label });
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
            label = getTranslatedText({ placeholder: label });
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
          label = getTranslatedText({ placeholder: label });
        }
        item[AKeyId] = get(item, keyId.value);
        item[AKeyLabel] = label;
      });
    }
    return DATA;
  });

  const dataKeyByKeyIdLocal = computed(() => {
    return keyBy(dataLocal.value, AKeyId);
  });

  return {
    dataKeyByKeyIdLocal,
    dataLocal,
  };
}
