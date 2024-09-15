import {
  ref,
  toRef,
} from "vue";

import {
  forEach,
  get,
  isNil,
} from "lodash-es";

export default function ActiveAPI(props, { emit }) {
  const activeTabId = toRef(props, "activeTabId");
  const data = toRef(props, "data");
  const isChangeOutside = toRef(props, "isChangeOutside");
  const keyActive = toRef(props, "keyActive");
  const keyId = toRef(props, "keyId");

  const activeTabIdLocal = ref(undefined);

  const setActiveTabIdLocal = () => {
    if (!isNil(activeTabId.value)) {
      activeTabIdLocal.value = activeTabId.value;
    }
  };

  const initActiveTabIdLocal = () => {
    setActiveTabIdLocal();

    if (!isNil(activeTabIdLocal.value)) {
      return;
    }

    if (keyActive.value) {
      forEach(data.value, (item, index) => {
        if (get(item, keyActive.value)) {
          if (keyId.value) {
            activeTabIdLocal.value = get(item, keyId.value) || index;
          } else {
            activeTabIdLocal.value = index;
          }

          return false;
        }
      });

      if (!isNil(activeTabIdLocal.value)) {
        return;
      }
    }

    if (keyId.value) {
      activeTabIdLocal.value = get(data.value, `[0].${ keyId.value }`) || 0;
    } else {
      activeTabIdLocal.value = 0;
    }
  };

  const changeTab = ({ $event, tab, tabId }) => {
    if (activeTabIdLocal.value === tabId) {
      return;
    }
    if (!isChangeOutside.value) {
      activeTabIdLocal.value = tabId;
    }
    emit("change", { $event, tab, tabId });
  };

  return {
    activeTabIdLocal,
    changeTab,
    initActiveTabIdLocal,
    setActiveTabIdLocal,
  };
}
