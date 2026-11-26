import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

export default function UpdateOffsetAPI(props, { emit }, {
  currentItem = computed(() => 1),
  maxItems = computed(() => 1),
}) {
  const disabled = toRef(props, "disabled");
  const limit = toRef(props, "limit");

  const navRef = ref(undefined);
  let isPageChangeRequested = false;

  const goToPage = page => {
    if (disabled.value ||
      page === currentItem.value ||
      page < 1 ||
      page > maxItems.value) {
      return;
    }
    isPageChangeRequested = true;
    const OFFSET = (page - 1) * limit.value;
    emit("update:offset", OFFSET);
    emit("update:page", page);
    emit("change", {
      limit: limit.value,
      offset: OFFSET,
      page,
    });
  };

  const updateOffset = page => goToPage(page);
  const updateOffsetFirst = () => goToPage(1);
  const updateOffsetPrevious = () => goToPage(currentItem.value - 1);
  const updateOffsetNext = () => goToPage(currentItem.value + 1);
  const updateOffsetLast = () => goToPage(maxItems.value);

  // "next" on the last but one page is disabled now or a page button is gone: the focus goes to the current page
  watch(currentItem, () => {
    if (!isPageChangeRequested) {
      return;
    }
    isPageChangeRequested = false;
    const NAV = navRef.value?.$el || navRef.value;
    const ACTIVE = document.activeElement;
    const IS_FOCUS_LOST = !ACTIVE ||
      ACTIVE === document.body ||
      (ACTIVE.disabled && NAV?.contains(ACTIVE));
    if (!NAV || !IS_FOCUS_LOST) {
      return;
    }
    const TARGET = NAV.querySelector("[aria-current='page']") ||
      NAV.querySelector("button:not([disabled])");
    TARGET?.focus();
  }, { flush: "post" });

  return {
    goToPage,
    navRef,
    updateOffset,
    updateOffsetFirst,
    updateOffsetLast,
    updateOffsetNext,
    updateOffsetPrevious,
  };
}
