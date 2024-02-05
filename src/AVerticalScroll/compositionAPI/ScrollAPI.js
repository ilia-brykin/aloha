import {
  ref,
  toRef,
} from "vue";

export default function ScrollAPI(props) {
  const scrollDistance = toRef(props, "scrollDistance");

  const canScrollDown = ref(false);
  const canScrollUp = ref(false);
  const containerRef = ref(undefined);
  const hasScroll = ref(false);
  const scrollContentRef = ref(undefined);
  const scrollContentChildRef = ref(undefined);

  const onScroll = () => {
    const scrollContent = scrollContentRef.value;
    canScrollUp.value = scrollContent.scrollTop > 0;
    canScrollDown.value = scrollContent.scrollTop < (scrollContent.scrollHeight - scrollContent.clientHeight);
  };

  const checkScroll = () => {
    hasScroll.value = scrollContentRef.value.scrollHeight > scrollContentRef.value.clientHeight;
    if (!hasScroll.value) {
      return;
    }
    onScroll();
  };

  const scrollUp = () => {
    scrollContentRef.value.scrollTop -= scrollDistance.value;
    checkScroll();
  };

  const scrollDown = () => {
    scrollContentRef.value.scrollTop += scrollDistance.value;
    checkScroll();
  };

  return {
    canScrollDown,
    canScrollUp,
    checkScroll,
    containerRef,
    hasScroll,
    onScroll,
    scrollContentChildRef,
    scrollContentRef,
    scrollDown,
    scrollUp,
  };
}
