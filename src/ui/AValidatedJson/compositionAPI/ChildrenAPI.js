import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  isArray,
} from "lodash-es";

export default function ChildrenAPI(props) {
  const readonly = toRef(props, "readonly");
  const showReadonlyChildren = toRef(props, "showReadonlyChildren");
  const children = toRef(props, "children");

  const filterReadonlyRecursive = childrenLocal => {
    return childrenLocal.reduce((acc, child) => {
      if (!child.readonly) {
        if (isArray(child.children) && child.children.length) {
          child.children = filterReadonlyRecursive(child.children);
        }
        acc.push(child);
      }
      return acc;
    }, []);
  };

  const childrenFiltered = computed(() => {
    if (readonly.value || showReadonlyChildren.value) {
      return children.value;
    }

    return filterReadonlyRecursive(cloneDeep(children.value));
  });

  return {
    childrenFiltered,
  };
}
