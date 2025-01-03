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
    if (item.value.to) {
      return 0;
    }
    return dataProParentChildren.value[id.value] && dataProParentChildren.value[id.value].length;
  });

  return {
    countChildren,
  };
}
