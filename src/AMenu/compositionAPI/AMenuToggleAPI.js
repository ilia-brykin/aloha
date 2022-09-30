import {
  ref,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

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
    if (isUndefined(isOpen)) {
      if (isMenuOpen.value) {
        closeMenu();
      } else {
        openMenu();
      }
    } else if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
}
