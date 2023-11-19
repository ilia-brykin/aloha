import {
  ref,
} from "vue";

export default function ObserverAPI({
  checkScroll = () => {},
  containerRef = ref(undefined),
  scrollContentRef = ref(undefined),
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
    resizeContainerObserver.value = new ResizeObserver(callbackContainerObserver);
  };

  const initScrollContentObserver = () => {
    resizeScrollContentObserver.value = new ResizeObserver(callbackScrollContentObserver);
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
      resizeScrollContentObserver.value.observe(scrollContentRef.value);
      resizeScrollContentObserverConnected.value = true;
    }
  };

  const disconnectScrollContentObserver = () => {
    if (resizeScrollContentObserverConnected.value) {
      resizeScrollContentObserver.value.unobserve(scrollContentRef.value);
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
