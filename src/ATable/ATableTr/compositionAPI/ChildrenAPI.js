import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isArray,
} from "lodash-es";

export default function ChildrenAPI(props) {
  const isTree = toRef(props, "isTree");
  const keyChildren = toRef(props, "keyChildren");
  const level = toRef(props, "level");
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");
  const rowsLength = toRef(props, "rowsLength");

  const children = computed(() => {
    if (!keyChildren.value) {
      return [];
    }
    const CHILDREN = get(row.value, keyChildren.value);
    if (isArray(CHILDREN)) {
      return CHILDREN;
    }

    return [];
  });

  const hasChildren = computed(() => {
    return children.value.length > 0;
  });

  const levelForChildren = computed(() => {
    return level.value + 1;
  });

  const ariaTreeAttributes = computed(() => {
    if (!isTree.value) {
      return {};
    }

    return {
      "aria-level": level.value,
      "aria-posinset": rowIndex.value + 1,
      "aria-setsize": rowsLength.value,
    };
  });

  const rowClassLevelChildren = computed(() => {
    if (isTree.value) {
      return `a_table__row_level a_table__row_level_${ level.value }`;
    }

    return undefined;
  });

  return {
    ariaTreeAttributes,
    children,
    hasChildren,
    levelForChildren,
    rowClassLevelChildren,
  };
}
