import {
  ref,
  toRef,
  watch,
} from "vue";

export default function ObserverAPI(props) {
  const callback = toRef(props, "callback");
  const disabled = toRef(props, "disabled");
  const rootMargin = toRef(props, "rootMargin");
  const threshold = toRef(props, "threshold");

  let observerOptions = {};
  const sentinelRef = ref(undefined);
  let intersectionObserver = undefined;

  const setObserverOptions = () => {
    observerOptions = {
      rootMargin: rootMargin.value,
      threshold: threshold.value,
    };
  };

  const setIntersectionObserver = () => {
    intersectionObserver = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        callback.value();
      }
    }, observerOptions);
  };

  const startObserver = () => {
    // before the mount there is no observer and no sentinel
    if (disabled.value || !intersectionObserver || !sentinelRef.value) {
      return;
    }
    intersectionObserver.observe(sentinelRef.value);
  };

  const disconnectObserver = () => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
    }
  };

  // disabled: no more loading; enabled again: the sentinel is observed again
  watch(disabled, newValue => {
    if (newValue) {
      disconnectObserver();
    } else {
      startObserver();
    }
  });

  return {
    disconnectObserver,
    sentinelRef,
    setIntersectionObserver,
    setObserverOptions,
    startObserver,
  };
}
