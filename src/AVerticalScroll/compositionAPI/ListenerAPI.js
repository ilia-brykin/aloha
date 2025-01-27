import {
  ref,
} from "vue";

export default function ListenerAPI({
  onScroll = () => {
  },
  scrollContentRef = ref(undefined),
}) {
  const addScrollListener = () => {
    scrollContentRef.value.addEventListener("scroll", onScroll);
  };

  const destroyScrollListener = () => {
    scrollContentRef.value.removeEventListener("scroll", onScroll);
  };

  return {
    addScrollListener,
    destroyScrollListener,
  };
}
