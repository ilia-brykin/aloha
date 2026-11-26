import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
  watch,
} from "vue";

export default function LoadMoreAPI(props, { emit }, {
  offsetLocal = computed(() => 0),
}) {
  const disabled = toRef(props, "disabled");
  const limit = toRef(props, "limit");
  const mode = toRef(props, "mode");
  const totalCount = toRef(props, "totalCount");

  // shortcut: the step is the limit at the start, a later change of "per page" does not change it; add a prop when needed
  const loadMoreStep = limit.value;
  const loadMoreStatusRef = ref(undefined);
  const loadMoreButtonRef = ref(undefined);
  let isLoadMoreRequested = false;
  let observer = undefined;

  const countShown = computed(() => {
    return Math.min(offsetLocal.value + limit.value, totalCount.value);
  });

  const countShownStart = computed(() => {
    return totalCount.value ? offsetLocal.value + 1 : 0;
  });

  const isAllShown = computed(() => {
    return countShown.value >= totalCount.value;
  });

  const loadMore = () => {
    if (disabled.value || isAllShown.value) {
      return;
    }
    isLoadMoreRequested = true;
    // the 2nd argument tells ATable not to scroll and not to move the focus
    emit("update:limit", limit.value + loadMoreStep, { loadMore: true });
  };

  const getButtonElement = () => loadMoreButtonRef.value?.$el || loadMoreButtonRef.value;

  const stopObserver = () => {
    observer?.disconnect();
    observer = undefined;
  };

  // mode "infinite": the button loads itself when it comes near the view; it stays for the keyboard
  const startObserver = () => {
    stopObserver();
    const BUTTON = getButtonElement();
    if (mode.value !== "infinite" || !BUTTON || typeof IntersectionObserver === "undefined") {
      return;
    }
    observer = new IntersectionObserver(entries => {
      // the rows of the last click did not come yet
      if (!isLoadMoreRequested && entries.some(entry => entry.isIntersecting)) {
        loadMore();
      }
    }, { rootMargin: "200px" });
    observer.observe(BUTTON);
  };

  watch([loadMoreButtonRef, mode], startObserver, { flush: "post" });

  watch(countShown, () => {
    if (!isLoadMoreRequested) {
      return;
    }
    isLoadMoreRequested = false;
    const ACTIVE = document.activeElement;
    // the button is gone with the last rows: the focus goes to the status, not to the body
    if (isAllShown.value && (!ACTIVE || ACTIVE === document.body)) {
      loadMoreStatusRef.value?.focus();
    }
    // the button is still in the view (few rows): observe again, the observer reports only changes
    startObserver();
  }, { flush: "post" });

  onBeforeUnmount(stopObserver);

  return {
    countShown,
    countShownStart,
    isAllShown,
    loadMore,
    loadMoreButtonRef,
    loadMoreStatusRef,
  };
}
