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

  const startObservingMutation = () => {
    if (isBtnHiddenDependentOnTextLength.value) {
      return;
    }
    observer.value = new ResizeObserver(
      debounce(() => {
        checkHeight();
      }, 300),
    );
    observer.value.observe(containerRef.value);
  };

  const stopObservingMutation = () => {
    if (isBtnHiddenDependentOnTextLength.value) {
      return;
    }
    if (observer.value) {
      observer.value.unobserve(containerRef.value);
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
