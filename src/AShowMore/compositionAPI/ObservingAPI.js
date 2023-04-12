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
  const mutationObserver = ref(undefined);
  const isMoreButtonVisible = ref(undefined);

  const checkHeight = () => {
    const CONTAINER_HEIGHT = get(containerRef.value, "offsetHeight") || 0;
    console.log("CONTAINER_HEIGHT", CONTAINER_HEIGHT);
    if (CONTAINER_HEIGHT > height.value) {
      isMoreButtonVisible.value = true;
    }
  };

  const startObservingMutation = () => {
    mutationObserver.value = new MutationObserver(() => {
      checkHeight();
    });
    mutationObserver.value.observe(containerRef.value, {
      subtree: true,
      characterData: true,
      childList: true,
    });
  };

  const stopObservingMutation = () => {
    if (mutationObserver.value) {
      mutationObserver.value.disconnect();
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
