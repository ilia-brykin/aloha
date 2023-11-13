import {
  computed,
  toRef,
} from "vue";

import AKeyChildren from "../../const/AKeyChildren";
import AKeyId from "../../const/AKeyId";
import AKeyLabel from "../../const/AKeyLabel";
import AKeyParent from "../../const/AKeyParent";
import {
  cloneDeep,
  forEach,
  get,
  isNil,
  keyBy,
} from "lodash-es";


export default function AMenuDataAPI(props) {
  const data = toRef(props, "data");

  const keyId = toRef(props, "keyId");
  const keyChildren = toRef(props, "keyChildren");
  const keyParent = toRef(props, "keyParent");

  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");

  const changeData = ({ dataClone, dataFlat = [], parentId }) => {
    forEach(dataClone, item => {
      item[AKeyId] = get(item, keyId.value);
      item[AKeyParent] = parentId || get(item, keyParent.value);
      if (keyLabelCallback.value) {
        item[AKeyLabel] = keyLabelCallback.value({ item });
      } else {
        item[AKeyLabel] = get(item, keyLabel.value);
      }
      if (keyChildren.value) {
        const CHILDREN = get(item, keyChildren.value);
        if (CHILDREN && CHILDREN.length) {
          changeData({
            dataClone: CHILDREN,
            parentId: item[AKeyId],
            dataFlat,
          });
          item[AKeyChildren] = CHILDREN;
        }
      }
      dataFlat.push(item);
    });
    return dataFlat;
  };

  const dataLocal = computed(() => {
    const DATA = cloneDeep(data.value);
    let dataFlat = [];
    dataFlat = changeData({ dataClone: DATA, dataFlat });
    return dataFlat;
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
