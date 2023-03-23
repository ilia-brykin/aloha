import {
  computed,
  inject,
  toRef,
} from "vue";

import AKeyId from "../../../ui/const/AKeyId";
import {
  cloneDeep,
} from "lodash-es";

export default function ToggleAPI(props) {
  const isParentOpen = toRef(props, "isParentOpen");
  const item = toRef(props, "item");
  const itemIndex = toRef(props, "itemIndex");
  const keyId = toRef(props, "keyId");
  const parentsIds = toRef(props, "parentsIds");

  const idsForOpen = inject("idsForOpen");
  const toggle = inject("toggle");

  const currentId = computed(() => {
    return item.value[AKeyId];
  });

  const isOpen = computed(() => {
    if (!isParentOpen.value) {
      return false;
    }
    return idsForOpen.value.indexOf(currentId.value) !== -1;
  });

  const parentsIdsForChild = computed(() => {
    const PARENT_INDEXES = cloneDeep(parentsIds.value);
    PARENT_INDEXES.push(`${ currentId.value }`);
    return PARENT_INDEXES;
  });

  const toggleLocal = $event => {
    toggle({
      $event: $event,
      parentsIds: parentsIds.value,
      isOpen: isOpen.value,
      item: item.value,
      itemIndex: itemIndex.value,
    });
  };

  const closeItemIfOpen = () => {
    if (isOpen.value && keyId.value) {
      toggleLocal();
    }
  };

  return {
    closeItemIfOpen,
    currentId,
    isOpen,
    parentsIdsForChild,
    toggleLocal,
  };
}
