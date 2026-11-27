import {
  computed,
  toRef,
} from "vue";

export default function ChildrenAPI(props, {
  id = computed(() => undefined),
}) {
  const dataProParentChildren = toRef(props, "dataProParentChildren");
  const item = toRef(props, "item");

  const countChildren = computed(() => {
    const CHILDREN = dataProParentChildren.value[id.value];
    // a link with children is a split item (link + toggle)
    if (item.value.to && !CHILDREN?.length) {
      return 0;
    }
    return CHILDREN && CHILDREN.length;
  });

  return {
    countChildren,
  };
}
