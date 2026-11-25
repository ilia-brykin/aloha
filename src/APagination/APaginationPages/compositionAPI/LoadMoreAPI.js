import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

export default function LoadMoreAPI(props, { emit }) {
  const disabled = toRef(props, "disabled");
  const limit = toRef(props, "limit");
  const offset = toRef(props, "offset");
  const totalCount = toRef(props, "totalCount");

  // shortcut: the step is the limit at the start, a later change of "per page" does not change it; add a prop when needed
  const loadMoreStep = limit.value;
  const loadMoreStatusRef = ref(undefined);
  let isLoadMoreRequested = false;

  const countShown = computed(() => {
    return Math.min(offset.value + limit.value, totalCount.value);
  });

  const countShownStart = computed(() => {
    return totalCount.value ? offset.value + 1 : 0;
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
  }, { flush: "post" });

  return {
    countShown,
    countShownStart,
    isAllShown,
    loadMore,
    loadMoreStatusRef,
  };
}
