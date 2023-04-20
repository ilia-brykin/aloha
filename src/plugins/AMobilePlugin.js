import {
  isMobileWidth,
  setIsMobileWidth,
} from "../compositionAPI/AMobileAPI";

export default {
  install: (app, {
    breakpoint,
  } = {}) => {
    setIsMobileWidth(window.innerWidth <= breakpoint);
    const resizeWindow = () => {
      if (window.innerWidth > breakpoint) {
        if (isMobileWidth.value) {
          setIsMobileWidth(false);
        }
      } else {
        if (!isMobileWidth.value) {
          setIsMobileWidth(true);
        }
      }
    };

    window.addEventListener("resize", resizeWindow);
  },
};
