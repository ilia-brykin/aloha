import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getTabId,
} from "./ATabAPI";
import {
  isTabDisabled,
} from "../ATabsTab/compositionAPI/DisabledAPI";

import {
  find,
  get,
  isNil,
  some,
} from "lodash-es";

export default function ActiveAPI(props, { emit }) {
  const activeTabId = toRef(props, "activeTabId");
  const data = toRef(props, "data");
  const disabled = toRef(props, "disabled");
  const isChangeOutside = toRef(props, "isChangeOutside");
  const keyActive = toRef(props, "keyActive");
  const keyDisabled = toRef(props, "keyDisabled");
  const keyId = toRef(props, "keyId");

  const activeTabIdLocal = ref(undefined);

  const tabs = computed(() => {
    return data.value.map((tab, index) => ({
      tab,
      index,
      tabId: getTabId({ tab, index, keyId: keyId.value }),
      isDisabled: isTabDisabled({ tab, disabled: disabled.value, keyDisabled: keyDisabled.value }),
    }));
  });

  const firstEnabledTabId = computed(() => {
    const TAB = find(tabs.value, item => !item.isDisabled) || tabs.value[0];
    return TAB?.tabId;
  });

  // the active tab is not in data (e.g. it was removed): the first enabled tab is shown
  const activeTabIdShown = computed(() => {
    if (some(tabs.value, item => item.tabId === activeTabIdLocal.value)) {
      return activeTabIdLocal.value;
    }
    return firstEnabledTabId.value;
  });

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

    // a disabled tab is not opened at the start
    if (keyActive.value) {
      const TAB_ACTIVE = find(tabs.value, item => !item.isDisabled && get(item.tab, keyActive.value));
      if (TAB_ACTIVE) {
        activeTabIdLocal.value = TAB_ACTIVE.tabId;
        return;
      }
    }

    activeTabIdLocal.value = firstEnabledTabId.value;
  };

  const changeTab = ({ $event, tab, tabId, index }) => {
    if (activeTabIdShown.value === tabId) {
      return;
    }

    if (!isChangeOutside.value) {
      activeTabIdLocal.value = tabId;
    }
    emit("change", { $event, tab, tabId, index });
    emit("update:activeTabId", tabId);
  };

  return {
    activeTabIdShown,
    changeTab,
    initActiveTabIdLocal,
    setActiveTabIdLocal,
    tabs,
  };
}
