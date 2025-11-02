import {
  nextTick,
  ref,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import EventBus from "../../utils/EventBus";

export default function ResizeAPI(props, {
  removeListenerForKeydownMobile = () => {},
  toggleMenu = () => {},
}) {
  const isMenuOpenInitial = toRef(props, "isMenuOpenInitial");
  const onlyMobile = toRef(props, "onlyMobile");

  const isMenuInitialized = ref(false);

  const {
    isMobileWidth,
  } = AMobileAPI();

  const resizeWindow = isMobileWidthLocal => {
    if (onlyMobile.value) {
      return;
    }

    if (isMobileWidthLocal) {
      toggleMenu({ isOpen: false });
    } else {
      toggleMenu({ isOpen: isMenuOpenInitial.value });
      removeListenerForKeydownMobile();
    }
  };

  const initEventBusUpdateViewOnResize = () => {
    if (onlyMobile.value) {
      return;
    }
    EventBus.$on("updateViewOnResize", resizeWindow);
  };

  const destroyEventBusUpdateViewOnResize = () => {
    if (onlyMobile.value) {
      return;
    }
    EventBus.$on("updateViewOnResize", resizeWindow);
  };

  const initMenuOpenOrClose = () => {
    if (onlyMobile.value) {
      isMenuInitialized.value = true;
      return;
    }

    if (isMobileWidth.value) {
      toggleMenu({ isOpen: false });
    } else {
      toggleMenu({ isOpen: isMenuOpenInitial.value });
    }
    nextTick().then(() => {
      isMenuInitialized.value = true;
    });
  };

  return {
    destroyEventBusUpdateViewOnResize,
    initEventBusUpdateViewOnResize,
    initMenuOpenOrClose,
    isMenuInitialized,
    isMobileWidth,
  };
}
