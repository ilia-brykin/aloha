import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../const/AKeyId";
import AKeyLabel from "../const/AKeyLabel";
import {
  cloneDeep,
  forEach,
  get, keyBy,
} from "lodash-es";

export default function UiDataWithKeyIdAndLabelAPI(props) {
  const data = toRef(props, "data");

  const isDataSimpleArray = toRef(props, "isDataSimpleArray");

  const keyId = toRef(props, "keyId");

  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");

  const dataLocal = computed(() => {
    const DATA = cloneDeep(data.value);
    if (keyLabelCallback.value) {
      if (isDataSimpleArray.value) {
        const DATA_LOCAL = [];
        forEach(DATA, item => {
          DATA_LOCAL.push({
            [AKeyId]: item,
            [AKeyLabel]: keyLabelCallback.value({ item }),
          });
        });
        return DATA_LOCAL;
      }
      forEach(DATA, item => {
        item[AKeyId] = get(item, keyId.value);
        item[AKeyLabel] = keyLabelCallback.value({ item });
      });
    } else {
      if (isDataSimpleArray.value) {
        const DATA_LOCAL = [];
        forEach(DATA, item => {
          DATA_LOCAL.push({
            [AKeyId]: item,
            [AKeyLabel]: item,
          });
        });
        return DATA_LOCAL;
      }
      forEach(DATA, item => {
        item[AKeyId] = get(item, keyId.value);
        item[AKeyLabel] = get(item, keyLabel.value);
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
