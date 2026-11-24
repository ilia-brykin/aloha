import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  debounce,
  get,
} from "lodash-es";

export default function ObservingAPI(props, {
  isBtnHiddenDependentOnTextLength = computed(() => false),
}) {
  const height = toRef(props, "height");

  const containerRef = ref(undefined);
  const observer = ref(undefined);
  const isMoreButtonObservingVisible = ref(undefined);

  const checkHeight = () => {
    if (isBtnHiddenDependentOnTextLength.value) {
      return;
    }
    const CONTAINER_HEIGHT = get(containerRef.value, "offsetHeight") || 0;
    if (CONTAINER_HEIGHT > height.value) {
      isMoreButtonObservingVisible.value = true;
    } else {
      isMoreButtonObservingVisible.value = false;
    }
  };

  const checkHeightDebounced = debounce(checkHeight, 300);

  const startObservingMutation = () => {
    if (isBtnHiddenDependentOnTextLength.value ||
      !containerRef.value ||
      typeof ResizeObserver === "undefined") {
      return;
    }
    observer.value = new ResizeObserver(checkHeightDebounced);
    observer.value.observe(containerRef.value);
  };

  // disconnect and no delayed check after the unmount
  const stopObservingMutation = () => {
    checkHeightDebounced.cancel();
    if (observer.value) {
      observer.value.disconnect();
      observer.value = undefined;
    }
  };

  return {
    checkHeight,
    containerRef,
    isMoreButtonObservingVisible,
    startObservingMutation,
    stopObservingMutation,
  };
}
