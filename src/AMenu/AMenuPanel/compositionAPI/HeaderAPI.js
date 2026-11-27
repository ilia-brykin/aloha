import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  AKeyLabel,
} from "../../../const/AKeys";
import {
  get,
} from "lodash-es";

export default function HeaderAPI(props, {
  openedLevelIndex = computed(() => 0),
}) {
  const dataKeyById = toRef(props, "dataKeyById");
  const isPanelMain = toRef(props, "isPanelMain");
  const parentId = toRef(props, "parentId");

  const isMenuOpen = inject("isMenuOpen");

  const isHeaderPanelVisible = computed(() => {
    return !isPanelMain.value &&
      !isMenuOpen.value &&
      openedLevelIndex.value === 0;
  });

  // split item: the header is the link to the page of the parent
  const parentTo = computed(() => {
    const PARENT = get(dataKeyById.value, parentId.value);
    return PARENT && !PARENT.disabled ? PARENT.to : undefined;
  });

  const parentLabel = computed(() => {
    return get(dataKeyById.value, `${ parentId.value }.${ AKeyLabel }`);
  });

  return {
    isHeaderPanelVisible,
    parentLabel,
    parentTo,
  };
}
