import {
  toRef,
  onBeforeUnmount, ref,
} from "vue";

export default function AMenuResizeAPI(props, {
  toggleMenu,
}) {
  const breakpointMobile = toRef(props, "breakpointMobile");
  const isOpenDefault = toRef(props, "isOpenDefault");

  let windowWidth = window.innerWidth;
  const isMenuMobile = ref(windowWidth <= breakpointMobile.value);

  const resizeWindow = () => {
    if (windowWidth > breakpointMobile.value) {
      if (window.innerWidth <= breakpointMobile.value) {
        toggleMenu({ isOpen: false });
        isMenuMobile.value = true;
      }
    } else {
      if (window.innerWidth > breakpointMobile.value) {
        toggleMenu({ isOpen: true });
        isMenuMobile.value = false;
      }
    }
    windowWidth = window.innerWidth;
  };

  const setResizeListener = () => {
    window.addEventListener("resize", resizeWindow);
  };

  const destroyResizeListener = () => {
    window.removeEventListener("resize", resizeWindow);
  };

  const initMenuOpenOrClose = () => {
    if (!isOpenDefault.value) {
      toggleMenu({ isOpen: false });
    } else if (windowWidth > breakpointMobile.value) {
      toggleMenu({ isOpen: true });
    }
  };

  setResizeListener();

  onBeforeUnmount(() => {
    destroyResizeListener();
  });

  return {
    initMenuOpenOrClose,
    isMenuMobile,
  };
}
