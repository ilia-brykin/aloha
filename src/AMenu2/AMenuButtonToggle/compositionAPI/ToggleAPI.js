import {
  computed,
  ref, toRef,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

const isMenuOpenMap = ref({});

export default function ToggleAPI(props) {
  const menuId = toRef(props, "menuId");
  const canChangeBodyClass = toRef(props, "canChangeBodyClass");

  const openMenu = () => {
    if (canChangeBodyClass.value) {
      document.body.classList.add("a_menu_2__wrapper_open");
      document.body.classList.remove("a_menu_2__wrapper_close");
    }
    isMenuOpenMap.value[menuId.value] = true;
  };

  const closeMenu = () => {
    if (canChangeBodyClass.value) {
      document.body.classList.add("a_menu_2__wrapper_close");
      document.body.classList.remove("a_menu_2__wrapper_open");
    }
    isMenuOpenMap.value[menuId.value] = false;
  };

  const removeBodyClasses = () => {
    if (canChangeBodyClass.value) {
      document.body.classList.remove("a_menu_2__wrapper_close");
      document.body.classList.remove("a_menu_2__wrapper_open");
    }
  };

  const toggleMenu = ({ isOpen } = {}) => {
    if (isUndefined(isOpen)) {
      if (isMenuOpenMap.value[menuId.value]) {
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

  const btnToggleTitle = computed(() => {
    return isMenuOpenMap.value[menuId.value] ?
      "_A_MENU_2_BTN_CLOSE_" :
      "_A_MENU_2_BTN_OPEN_";
  });

  const isMenuOpen = computed(() => {
    return isMenuOpenMap.value[menuId.value];
  });

  return {
    btnToggleTitle,
    isMenuOpen,
    removeBodyClasses,
    toggleMenu,
  };
}
