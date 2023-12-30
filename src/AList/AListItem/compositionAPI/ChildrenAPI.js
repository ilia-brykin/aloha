import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isArray,
  isObject,
} from "lodash-es";

export default function ChildrenAPI(props) {
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const item = toRef(props, "item");
  const keyChildren = toRef(props, "keyChildren");

  const isItemObject = computed(() => {
    return isObject(item.value);
  });

  const children = computed(() => {
    if (isDataSimpleArray.value) {
      return item.value?.[1];
    }
    if (!keyChildren.value || !isItemObject.value) {
      return [];
    }
    return get(item.value, keyChildren.value) || [];
  });

  const hasChildren = computed(() => {
    return isArray(children.value) && children.value.length > 0;
  });

  return {
    children,
    hasChildren,
  };
}
