import {
  computed,
  toRef,
} from "vue";

export default function LoadingAPI(props) {
  const loading = toRef(props, "loading");
  const loadingAlign = toRef(props, "loadingAlign");

  const isLoadingLeft = computed(() => {
    return loading.value && loadingAlign.value === "left";
  });

  const isLoadingRight = computed(() => {
    return loading.value && loadingAlign.value === "right";
  });

  return {
    isLoadingLeft,
    isLoadingRight,
  };
}
