import {
  toRef,
} from "vue";

import {
  getTabDomId,
} from "./ATabAPI";

/**
 * WAI-ARIA tabs: arrows go to the previous / next tab (ArrowUp / ArrowDown in vertical tabs), Home / End to the first / last.
 * Disabled tabs are skipped, the arrows go round. The focused tab is opened at once (automatic activation).
 */
export default function KeyboardAPI(props, {
  changeTab = () => {},
  tabs,
}) {
  const id = toRef(props, "id");
  const isVertical = toRef(props, "isVertical");

  const getKeys = $event => {
    if (isVertical.value) {
      return { next: "ArrowDown", prev: "ArrowUp" };
    }
    // in right-to-left the next tab is on the left
    const IS_RTL = getComputedStyle($event.currentTarget).direction === "rtl";
    return IS_RTL ?
      { next: "ArrowLeft", prev: "ArrowRight" } :
      { next: "ArrowRight", prev: "ArrowLeft" };
  };

  const onKeydownTablist = $event => {
    const TABS_ENABLED = tabs.value.filter(item => !item.isDisabled);
    const CURRENT_ID = $event.target.closest?.("[role=\"tab\"]")?.id;
    const CURRENT_INDEX = TABS_ENABLED.findIndex(item => getTabDomId({ parentId: id.value, tabId: item.tabId }) === CURRENT_ID);
    if (CURRENT_INDEX === -1) {
      return;
    }

    const KEYS = getKeys($event);
    const COUNT = TABS_ENABLED.length;
    let target;
    if ($event.key === KEYS.next) {
      target = TABS_ENABLED[(CURRENT_INDEX + 1) % COUNT];
    } else if ($event.key === KEYS.prev) {
      target = TABS_ENABLED[(CURRENT_INDEX - 1 + COUNT) % COUNT];
    } else if ($event.key === "Home") {
      target = TABS_ENABLED[0];
    } else if ($event.key === "End") {
      target = TABS_ENABLED[COUNT - 1];
    } else {
      return;
    }

    $event.preventDefault();
    document.getElementById(getTabDomId({ parentId: id.value, tabId: target.tabId }))?.focus();
    changeTab({ $event, tab: target.tab, tabId: target.tabId, index: target.index });
  };

  return {
    onKeydownTablist,
  };
}
