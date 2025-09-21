import {
  isMobileWidth,
  mobileBreakpoint,
  setIsMobileWidth,
} from "../compositionAPI/AMobileAPI";

import {
  isBrowser,
} from "../utils/isBrowser";

export default {
  install: (app, {
    breakpoint,
  } = {}) => {
    mobileBreakpoint.value = breakpoint;
    if (!isBrowser()) {
      return;
    }
    setIsMobileWidth(window.innerWidth <= mobileBreakpoint.value);
    const resizeWindow = () => {
      if (window.innerWidth > mobileBreakpoint.value) {
        if (isMobileWidth.value) {
          setIsMobileWidth(false);
        }
      } else if (!isMobileWidth.value) {
        setIsMobileWidth(true);
      }
    };

    window.addEventListener("resize", resizeWindow);
  },
};
