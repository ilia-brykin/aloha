import {
  computed,
  toRef,
} from "vue";

import AKeyBreadcrumbs from "../const/AKeyBreadcrumbs";
import AKeyChildren from "../../const/AKeyChildren";
import AKeyId from "../../const/AKeyId";
import AKeyLabel from "../../const/AKeyLabel";
import AKeyParent from "../../const/AKeyParent";
import {
  getTranslatedText,
  isPlaceholderTranslate,
} from "../../ATranslation/compositionAPI/UtilsAPI";
import {
  clone,
  cloneDeep,
  forEach,
  get,
  isNil,
  keyBy,
} from "lodash-es";


export default function DataAPI(props) {
  const data = toRef(props, "data");
  const isTranslated = toRef(props, "isTranslated");
  const keyChildren = toRef(props, "keyChildren");
  const keyId = toRef(props, "keyId");
  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");

  const getCurrentBreadcrumbs = ({ breadcrumbs = [], parentId, parentLabel }) => {
    const BREADCRUMBS = clone(breadcrumbs);
    if (parentId) {
      BREADCRUMBS.push({
        parentId,
        parentLabel,
      });
    }

    return BREADCRUMBS;
  };

  const changeData = ({ dataClone, dataFlat = [], parentId, parentLabel, breadcrumbs = [] }) => {
    forEach(dataClone, item => {
      item[AKeyId] = get(item, keyId.value);
      item[AKeyParent] = parentId;
      item[AKeyBreadcrumbs] = getCurrentBreadcrumbs({
        breadcrumbs,
        parentId,
        parentLabel,
      });
      let label;
      if (keyLabelCallback.value) {
        label = keyLabelCallback.value({ item });
      } else {
        label = get(item, keyLabel.value);
      }
      if (isTranslated.value && isPlaceholderTranslate(label)) {
        label = getTranslatedText({ placeholder: label });
      }
      item[AKeyLabel] = label;
      if (keyChildren.value) {
        const CHILDREN = get(item, keyChildren.value);
        if (CHILDREN && CHILDREN.length) {
          changeData({
            dataClone: CHILDREN,
            parentId: item[AKeyId],
            parentLabel: item[AKeyLabel],
            dataFlat,
            breadcrumbs: item[AKeyBreadcrumbs],
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
