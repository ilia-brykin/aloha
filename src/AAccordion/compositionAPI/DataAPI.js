import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
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
  const keyChildren = toRef(props, "keyChildren");

  const setIdForItems = ({ items, parentIds = "" }) => {
    forEach(items, (item, itemIndex) => {
      const ID_FROM_KEY_ID = get(item, keyId.value);
      let id;
      if (isNil(ID_FROM_KEY_ID)) {
        id = `${ parentIds }${ itemIndex }`;
      } else {
        id = `${ parentIds }${ ID_FROM_KEY_ID }`;
      }
      item[AKeyId] = id;
      const CHILDREN = item[keyChildren.value];
      if (CHILDREN && CHILDREN.length) {
        setIdForItems({ items: CHILDREN, parentIds: `${ id }_` });
      }
    });
  };

  const dataWithIds = computed(() => {
    const DATA_LOCAL = cloneDeep(data.value);
    setIdForItems({ items: DATA_LOCAL });
    return DATA_LOCAL;
  });

  return {
    dataWithIds,
  };
}
