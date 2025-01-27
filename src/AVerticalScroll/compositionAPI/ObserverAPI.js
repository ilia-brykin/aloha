import {
  ref,
} from "vue";

import {
  debounce,
} from "lodash-es";

export default function ObserverAPI({
  checkScroll = () => {
  },
  containerRef = ref(undefined),
  scrollContentChildRef = ref(undefined),
}) {
  const resizeContainerObserver = ref(undefined);
  const resizeContainerObserverConnected = ref(false);
  const resizeScrollContentObserver = ref(undefined);
  const resizeScrollContentObserverConnected = ref(false);
  const heightContainer = ref(0);
  const heightScrollContent = ref(0);

  const callbackContainerObserver = entries => {
    const RECT = entries[0].contentRect;
    const HEIGHT = RECT.height;
    if (heightContainer.value === 0 || heightContainer.value !== HEIGHT) {
      heightContainer.value = HEIGHT;
      checkScroll();
    }
  };

  const callbackScrollContentObserver = entries => {
    const RECT = entries[0].contentRect;
    const HEIGHT = RECT.height;
    if (heightScrollContent.value === 0 || heightScrollContent.value !== HEIGHT) {
      heightScrollContent.value = HEIGHT;
      checkScroll();
    }
  };

  const initContainerObserver = () => {
    resizeContainerObserver.value = new ResizeObserver(
      debounce(entries => callbackContainerObserver(entries), 300),
    );
  };

  const initScrollContentObserver = () => {
    resizeScrollContentObserver.value = new ResizeObserver(
      debounce(entries => callbackScrollContentObserver(entries), 300),
    );
  };

  const connectContainerObserver = () => {
    if (!resizeContainerObserverConnected.value) {
      resizeContainerObserver.value.observe(containerRef.value);
      resizeContainerObserverConnected.value = true;
    }
  };

  const disconnectContainerObserver = () => {
    if (resizeContainerObserverConnected.value) {
      resizeContainerObserver.value.unobserve(containerRef.value);
      resizeContainerObserverConnected.value = false;
    }
  };

  const destroyContainerObserver = () => {
    resizeContainerObserver.value.disconnect();
  };

  const connectScrollContentObserver = () => {
    if (!resizeScrollContentObserverConnected.value) {
      resizeScrollContentObserver.value.observe(scrollContentChildRef.value);
      resizeScrollContentObserverConnected.value = true;
    }
  };

  const disconnectScrollContentObserver = () => {
    if (resizeScrollContentObserverConnected.value) {
      resizeScrollContentObserver.value.unobserve(scrollContentChildRef.value);
      resizeScrollContentObserverConnected.value = false;
    }
  };

  const destroyScrollContentObserver = () => {
    resizeScrollContentObserver.value.disconnect();
  };

  const initObservers = () => {
    initContainerObserver();
    initScrollContentObserver();
  };

  const connectObservers = () => {
    connectContainerObserver();
    connectScrollContentObserver();
  };

  const disconnectObservers = () => {
    disconnectContainerObserver();
    disconnectScrollContentObserver();
  };

  const destroyObservers = () => {
    destroyContainerObserver();
    destroyScrollContentObserver();
  };

  return {
    connectObservers,
    destroyObservers,
    disconnectObservers,
    initObservers,
  };
}
