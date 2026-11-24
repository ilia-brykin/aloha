import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isNil,
} from "lodash-es";

// id of a tab: the value of keyId or the index
export function getTabId({ tab, index, keyId }) {
  if (keyId) {
    const ID = get(tab, keyId);
    return isNil(ID) ? index : ID;
  }
  return index;
}

// id in the DOM: built from the id of the tab, so it stays the same when the tabs change their order
export function getTabDomId({ parentId, tabId }) {
  return `${ parentId }_${ `${ tabId }`.replace(/[^\w-]/g, "_") }`;
}

export default function ATabAPI(props) {
  const activeTabIdLocal = toRef(props, "activeTabIdLocal");
  const index = toRef(props, "index");
  const keyId = toRef(props, "keyId");
  const parentId = toRef(props, "parentId");
  const tab = toRef(props, "tab");

  const tabIdLocal = computed(() => {
    return getTabId({ tab: tab.value, index: index.value, keyId: keyId.value });
  });

  const isActive = computed(() => {
    return activeTabIdLocal.value === tabIdLocal.value;
  });

  const idLocal = computed(() => {
    return getTabDomId({ parentId: parentId.value, tabId: tabIdLocal.value });
  });

  const idForContent = computed(() => {
    return `${ idLocal.value }_content`;
  });

  return {
    idForContent,
    idLocal,
    isActive,
    tabIdLocal,
  };
}
