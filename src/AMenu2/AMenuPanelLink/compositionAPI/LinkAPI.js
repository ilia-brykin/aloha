import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";

export default function LinkAPI(props) {
  const idsSearchVisible = toRef(props, "idsSearchVisible");
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");
  const item = toRef(props, "item");

  const isLinkDisabled = computed(() => {
    return !!item.value.disabled;
  });

  const isLinkVisible = computed(() => {
    if (isLinkInSearchPanel.value) {
      return !!idsSearchVisible.value.rest[item.value[AKeyId]];
    }
    return true;
  });

  const toLocal = computed(() => {
    if (isLinkDisabled.value) {
      return "#";
    }
    return item.value.to;
  });

  return {
    isLinkDisabled,
    isLinkVisible,
    toLocal,
  };
}
