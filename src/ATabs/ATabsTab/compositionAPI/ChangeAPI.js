import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

export default function ChangeAPI(props, { emit }, {
  isDisabled = computed(() => false),
  tabIdLocal = computed(() => ""),
}) {
  const index = toRef(props, "index");
  const tab = toRef(props, "tab");

  const changeTabLocal = $event => {
    if (isDisabled.value) {
      return;
    }

    emit("changeTab", { $event, tab: tab.value, tabId: tabIdLocal.value, index: index.value });
  };

  const keydownTab = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      changeTabLocal($event);
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    changeTabLocal,
    keydownTab,
  };
}
