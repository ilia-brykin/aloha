import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
  AKeyIndex,
} from "../../const/AKeys";
import {
  cloneDeep,
  forEach,
  get,
} from "lodash-es";

export default function DataAPI(props) {
  const data = toRef(props, "data");
  const keyId = toRef(props, "keyId");

  const dataLocal = computed(() => {
    const DATA = cloneDeep(data.value);

    if (keyId.value) {
      forEach(DATA, (item, index) => {
        item[AKeyId] = get(item, keyId.value) || index;
        item[AKeyIndex] = index;
      });
    } else {
      forEach(DATA, (item, index) => {
        item[AKeyId] = index;
        item[AKeyIndex] = index;
      });
    }

    return DATA;
  });

  return {
    dataLocal,
  };
}
