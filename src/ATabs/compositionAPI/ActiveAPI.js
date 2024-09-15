import {
  ref,
  toRef,
} from "vue";

import {
  forEach,
  isNil,
} from "lodash-es";

export default function ActiveAPI(props, { emit }) {
  const activeTabId = toRef(props, "activeTabId");
  const data = toRef(props, "data");
  const isChangeOutside = toRef(props, "isChangeOutside");

  const activeTabIdLocal = ref(0);

  const setActiveTabIdLocal = () => {
    if (!isNil(activeTabId.value)) {
      activeTabIdLocal.value = activeTabId.value;
    }
  };

  const initTabActiveIndex = () => {
    setActiveTabIdLocal();

    if (!isNil(activeTabIdLocal.value)) {
      return;
    }

    forEach(data.value, (item, index) => {
      if (item.active) {
        activeTabIdLocal.value = index;
        return false;
      }
    });
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
    changeTab,
    activeTabIdLocal,
    initTabActiveIndex,
    setActiveTabIdLocal,
  };
}
