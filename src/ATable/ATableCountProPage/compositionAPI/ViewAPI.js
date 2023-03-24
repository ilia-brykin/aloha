import {
  computed,
  toRef,
} from "vue";

export default function ViewAPI(props) {
  const perPageView = toRef(props, "perPageView");
  const isMobile = toRef(props, "isMobile");

  const currentView = computed(() => {
    if (isMobile.value) {
      return perPageView.value.mobile || "select";
    }
    return perPageView.value.desktop || "inline";
  });

  return {
    currentView,
  };
}
