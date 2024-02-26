import {
  computed,
  toRef,
} from "vue";

export default function MainFilterAPI(props) {
  const filterMain = toRef(props, "filterMain");

  const hasFilterMain = computed(() => {
    return !!filterMain.value;
  });

  const dataMainFilter = computed(() => {
    if (!hasFilterMain.value) {
      return [];
    }
    return [
      filterMain.value,
    ];
  });

  return {
    hasFilterMain,
    dataMainFilter,
  };
}
