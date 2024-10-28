import {
  nextTick,
  ref,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import EventBus from "../../utils/EventBus";

export default function ResizeAPI(props, {
  removeListenerForKeydown = () => {},
  toggleMenu = () => {},
}) {
  const isMenuOpenInitial = toRef(props, "isMenuOpenInitial");

  const isMenuInitialized = ref(false);

  const {
    isMobileWidth,
  } = AMobileAPI();

  const resizeWindow = isMobileWidthLocal => {
    if (isMobileWidthLocal) {
      toggleMenu({ isOpen: false });
    } else {
      toggleMenu({ isOpen: isMenuOpenInitial.value });
      removeListenerForKeydown();
    }
  };

  const initEventBusUpdateViewOnResize = () => {
    EventBus.$on("updateViewOnResize", resizeWindow);
  };

  const destroyEventBusUpdateViewOnResize = () => {
    EventBus.$on("updateViewOnResize", resizeWindow);
  };

  const initMenuOpenOrClose = () => {
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
