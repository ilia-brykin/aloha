import {
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import EventBus from "../../utils/EventBus";

export default function ResizeAPI(props, {
  toggleMenu,
}) {
  const isMenuOpenInitial = toRef(props, "isMenuOpenInitial");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const resizeWindow = isMobileWidthLocal => {
    if (isMobileWidthLocal) {
      toggleMenu({ isOpen: false });
    } else {
      toggleMenu({ isOpen: isMenuOpenInitial.value });
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
  };

  return {
    destroyEventBusUpdateViewOnResize,
    initEventBusUpdateViewOnResize,
    initMenuOpenOrClose,
    isMobileWidth,
  };
}
