import {
  ref,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function ObservingAPI(props) {
  const height = toRef(props, "height");

  const containerRef = ref(undefined);
  const observer = ref(undefined);
  const isMoreButtonVisible = ref(undefined);

  const checkHeight = () => {
    const CONTAINER_HEIGHT = get(containerRef.value, "offsetHeight") || 0;
    if (CONTAINER_HEIGHT > height.value) {
      isMoreButtonVisible.value = true;
    } else {
      isMoreButtonVisible.value = false;
    }
  };

  const startObservingMutation = () => {
    observer.value = new ResizeObserver(() => {
      checkHeight();
    });
    observer.value.observe(containerRef.value);
  };

  const stopObservingMutation = () => {
    if (observer.value) {
      observer.value.unobserve(containerRef.value);
    }
  };

  return {
    checkHeight,
    containerRef,
    isMoreButtonVisible,
    startObservingMutation,
    stopObservingMutation,
  };
}
