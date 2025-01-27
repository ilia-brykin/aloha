import {
  computed,
  ref,
  toRef,
} from "vue";

export default function BackdropAPI(props, {
  isMenuOpen = computed(() => false),
  isMobileWidth = ref(undefined),
  toggleMenu = () => {
  },
}) {
  const isBackdropMobileClickable = toRef(props, "isBackdropMobileClickable");
  const useBackdropMobile = toRef(props, "useBackdropMobile");

  const isBackdropVisible = computed(() => {
    return useBackdropMobile.value && isMenuOpen.value && isMobileWidth.value;
  });

  const clickBackdrop = () => {
    toggleMenu({
      isOpen: false,
    });
  };

  const clickAttributesBackdrop = computed(() => {
    if (isBackdropMobileClickable.value) {
      return {
        onClick: clickBackdrop,
      };
    }

    return {};
  });

  return {
    clickAttributesBackdrop,
    isBackdropVisible,
  };
}
