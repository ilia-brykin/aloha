import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function ChildrenAPI(props) {
  const item = toRef(props, "item");

  const keyChildren = inject("keyChildren");

  const children = computed(() => {
    return get(item.value, keyChildren.value, []) || [];
  });

  const hasChildren = computed(() => {
    return children.value.length !== 0;
  });

  return {
    children,
    hasChildren,
  };
}
