import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../ui/const/AKeyId";
import AKeyLabel from "../../ui/const/AKeyLabel";
import AKeyParent from "../../ui/const/AKeyParent";
import {
  cloneDeep,
  forEach,
  get,
  isNil, keyBy,
} from "lodash-es";


export default function AMenuDataAPI(props) {
  const data = toRef(props, "data");

  const keyId = toRef(props, "keyId");
  const keyParent = toRef(props, "keyParent");

  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");

  const dataLocal = computed(() => {
    const DATA = cloneDeep(data.value);
    if (keyLabelCallback.value) {
      forEach(DATA, item => {
        item[AKeyId] = get(item, keyId.value);
        item[AKeyParent] = get(item, keyParent.value);
        item[AKeyLabel] = keyLabelCallback.value({ item });
      });
    } else {
      forEach(DATA, item => {
        item[AKeyId] = get(item, keyId.value);
        item[AKeyParent] = get(item, keyParent.value);
        item[AKeyLabel] = get(item, keyLabel.value);
      });
    }
    return DATA;
  });

  const dataProParent = computed(() => {
    const MAIN = [];
    const ITEMS_PRO_PARENT = {};
    forEach(dataLocal.value, item => {
      const PARENT = item[AKeyParent];
      if (isNil(PARENT)) {
        MAIN.push(item);
      } else {
        ITEMS_PRO_PARENT[PARENT] = ITEMS_PRO_PARENT[PARENT] || [];
        ITEMS_PRO_PARENT[PARENT].push(item);
      }
    });

    return {
      main: MAIN,
      children: ITEMS_PRO_PARENT,
    };
  });

  const dataKeyById = computed(() => {
    return keyBy(dataLocal.value, AKeyId);
  });

  return {
    dataKeyById,
    dataProParent,
  };
}
