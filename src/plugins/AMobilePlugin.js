import {
  isMobile,
  setIsMobile,
} from "../compositionAPI/AMobileAPI";

export default {
  install: (app, {
    breakpoint,
  } = {}) => {
    setIsMobile(window.innerWidth <= breakpoint);
    const resizeWindow = () => {
      if (window.innerWidth > breakpoint) {
        if (isMobile.value) {
          setIsMobile(false);
        }
      } else {
        if (!isMobile.value) {
          setIsMobile(true);
        }
      }
    };

    window.addEventListener("resize", resizeWindow);
  },
};
