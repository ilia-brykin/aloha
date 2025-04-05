import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../const/AKeys";
import {
  cloneDeep,
} from "lodash-es";

export default function ToggleAPI(props) {
  const isParentOpen = toRef(props, "isParentOpen");
  const item = toRef(props, "item");
  const itemIndex = toRef(props, "itemIndex");
  const keyId = toRef(props, "keyId");
  const parentsIds = toRef(props, "parentsIds");
  const parentIndexes = toRef(props, "parentIndexes");

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
    const PARENT_IDS = cloneDeep(parentsIds.value);
    PARENT_IDS.push(`${ currentId.value }`);
    return PARENT_IDS;
  });

  const parentIndexesString = computed(() => {
    return parentIndexes.value.join(".");
  });

  const currentIndex = computed(() => {
    if (parentIndexesString.value) {
      return `${ parentIndexesString.value }.${ itemIndex.value }`;
    }
    return `${ itemIndex.value }`;
  });

  const parentIndexesForChild = computed(() => {
    const PARENT_INDEXES = cloneDeep(parentIndexes.value);
    PARENT_INDEXES.push(`${ currentIndex.value }`);
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
    parentIndexesForChild,
    parentsIdsForChild,
    toggleLocal,
  };
}
