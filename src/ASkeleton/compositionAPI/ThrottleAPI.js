import {
  onBeforeUnmount,
  ref,
  toRef,
  watch,
} from "vue";

export default function ThrottleAPI(props) {
  const loading = toRef(props, "loading");
  const throttle = toRef(props, "throttle");

  const isSkeletonVisible = ref(false);
  let timer;

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }
  };

  // With throttle the skeleton is shown only if the loading takes longer, so fast answers do not flicker
  watch(loading, () => {
    clearTimer();
    if (!loading.value) {
      isSkeletonVisible.value = false;
      return;
    }
    if (throttle.value > 0) {
      isSkeletonVisible.value = false;
      timer = setTimeout(() => {
        timer = undefined;
        isSkeletonVisible.value = true;
      }, throttle.value);
      return;
    }
    isSkeletonVisible.value = true;
  }, {
    immediate: true,
  });

  onBeforeUnmount(clearTimer);

  return {
    isSkeletonVisible,
  };
}
