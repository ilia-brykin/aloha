import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
  AKeyIndex,
  AKeyLabel,
} from "../../const/AKeys";
import {
  cloneDeep,
  forEach,
  get,
  isNil,
} from "lodash-es";

export default function DataAPI(props) {
  const data = toRef(props, "data");
  const keyId = toRef(props, "keyId");
  const keyLabel = toRef(props, "keyLabel");

  const dataLocal = computed(() => {
    const DATA = cloneDeep(data.value) || [];
    forEach(DATA, (item, index) => {
      const ID = keyId.value ? get(item, keyId.value) : undefined;
      item[AKeyId] = isNil(ID) || ID === "" ? index : ID;
      item[AKeyIndex] = index;
      item[AKeyLabel] = keyLabel.value ? get(item, keyLabel.value) : undefined;
    });

    return DATA;
  });

  const count = computed(() => {
    return dataLocal.value.length;
  });

  return {
    count,
    dataLocal,
  };
}
