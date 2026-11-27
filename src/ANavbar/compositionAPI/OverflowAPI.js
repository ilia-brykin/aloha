import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

// the width of the button "…" before it is measured
const MORE_WIDTH_DEFAULT = 48;

/**
 * overflow "more": the items that do not fit in the width go into the button "…" (no horizontal scroll).
 * The widths are measured once with all items visible and again after a change of the data.
 */
export default function OverflowAPI(props, {
  isBar = computed(() => true),
  listRef = ref(undefined),
}) {
  const data = toRef(props, "data");
  const overflow = toRef(props, "overflow");

  const visibleCount = ref(Infinity);
  let widths = [];
  let moreWidth = MORE_WIDTH_DEFAULT;
  let resizeObserver;

  const isMoreMode = computed(() => isBar.value && overflow.value === "more");

  const getItemElements = () => {
    return listRef.value ? Array.from(listRef.value.querySelectorAll(":scope > .a_navbar__item_top")) : [];
  };

  // the widths are read while all items are visible (also after a resize, the fonts or a late layout)
  const readWidths = () => {
    widths = getItemElements().map(element => element.offsetWidth);
  };

  const calculate = () => {
    const LIST = listRef.value;
    if (!isMoreMode.value || !LIST) {
      visibleCount.value = Infinity;
      return;
    }
    if (visibleCount.value === Infinity) {
      readWidths();
    }
    const AVAILABLE = LIST.clientWidth;
    // the gap between the items is not in offsetWidth
    const GAP = parseFloat(getComputedStyle(LIST).columnGap) || 0;
    const TOTAL = widths.reduce((sum, width) => sum + width + GAP, -GAP);
    if (!AVAILABLE || TOTAL <= AVAILABLE) {
      visibleCount.value = Infinity;
      return;
    }
    let sum = moreWidth;
    let count = 0;
    while (count < widths.length && sum + widths[count] + GAP <= AVAILABLE) {
      sum += widths[count] + GAP;
      count++;
    }
    visibleCount.value = count;
  };

  const readWidthOfMore = () => {
    const MORE = listRef.value?.querySelector(":scope > .a_navbar__more");
    if (MORE?.offsetWidth && MORE.offsetWidth !== moreWidth) {
      moreWidth = MORE.offsetWidth;
      calculate();
    }
  };

  // all items visible, then their widths
  const measure = async() => {
    visibleCount.value = Infinity;
    await nextTick();
    calculate();
    // the real width of "…"
    await nextTick();
    readWidthOfMore();
  };

  onMounted(() => {
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(calculate);
    }
    if (listRef.value) {
      resizeObserver?.observe(listRef.value);
    }
    measure();
    // web fonts change the widths
    document.fonts?.ready.then(measure);
  });

  // the list is created again (mobile / desktop): observe the new one
  watch(listRef, (element, elementOld) => {
    if (elementOld) {
      resizeObserver?.unobserve(elementOld);
    }
    if (element) {
      resizeObserver?.observe(element);
      measure();
    }
  });

  watch([data, isMoreMode], measure, { deep: true });

  onBeforeUnmount(() => resizeObserver?.disconnect());

  return {
    calculate,
    isMoreMode,
    measure,
    visibleCount,
  };
}
