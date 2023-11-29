import {
  computed,
  ref,
  toRef,
} from "vue";

export default function LinkClickAPI(props, {
  closeAllPanels = () => {},
  isMenuOpen = computed(() => false),
  isMobileWidth = ref(false),
  resetSearch = () => {},
  toggleMenu = () => {},
}) {
  const isBodyFocusAfterClick = toRef(props, "isBodyFocusAfterClick");

  const isMenuLinkClicked = ref(false);

  const setFocusToBody = () => {
    if (isBodyFocusAfterClick.value) {
      if (!document.body.hasAttribute("tabindex")) {
        document.body.setAttribute("tabindex", "-1");
        document.body.focus();
        document.body.removeAttribute("tabindex");
      } else {
        document.body.focus();
      }
    }
  };

  const clickMenuLink = () => {
    isMenuLinkClicked.value = true;
    resetSearch();
    setFocusToBody();
    if (!isMenuOpen.value) {
      closeAllPanels();
    }
    if (isMobileWidth.value) {
      toggleMenu({ isOpen: false });
    }
  };

  return {
    clickMenuLink,
    isMenuLinkClicked,
  };
}
