import {
  computed,
  ref,
  toRef,
} from "vue";

export default function UiLoadingAPI(props, {
  loadingDataFromServer = ref(false),
}) {
  const loading = toRef(props, "loading");

  const loadingLocal = computed(() => {
    return !!(loading.value || loadingDataFromServer.value);
  });

  return {
    loadingLocal,
  };
}
