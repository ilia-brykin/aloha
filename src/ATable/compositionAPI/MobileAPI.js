import {
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

export default function MobileAPI(props) {
  const mobileWidth = toRef(props, "mobileWidth");

  const isMobile = ref(false);

  const checkMobileWidth = () => {
    isMobile.value = window.innerWidth <= mobileWidth.value;
  };

  checkMobileWidth();
  window.addEventListener("resize", checkMobileWidth);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkMobileWidth);
  });

  return {
    isMobile,
  };
}
