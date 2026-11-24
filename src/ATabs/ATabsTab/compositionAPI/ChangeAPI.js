import {
  computed,
  toRef,
} from "vue";

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

  return {
    changeTabLocal,
  };
}
