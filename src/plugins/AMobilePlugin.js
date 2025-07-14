import {
  isMobileWidth,
  mobileBreakpoint,
  setIsMobileWidth,
} from "../compositionAPI/AMobileAPI";

export default {
  install: (app, {
    breakpoint,
  } = {}) => {
    mobileBreakpoint.value = breakpoint;
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
