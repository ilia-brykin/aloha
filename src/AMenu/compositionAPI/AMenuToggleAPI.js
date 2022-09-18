import {
  ref,
} from "vue";

const isMenuOpen = ref(undefined);

export default function AMenuToggleAPI() {
  const openMenu = () => {
    document.body.classList.add("a_menu__wrapper_open");
    document.body.classList.remove("a_menu__wrapper_close");
    isMenuOpen.value = true;
  };

  const closeMenu = () => {
    document.body.classList.add("a_menu__wrapper_close");
    document.body.classList.remove("a_menu__wrapper_open");
    isMenuOpen.value = false;
  };

  const toggleMenu = ({ isOpen } = {}) => {
    if (isMenuOpen.value && !isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const initMenuOpenOrClose = isOpen => {
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  return {
    initMenuOpenOrClose,
    isMenuOpen,
    toggleMenu,
  };
}
