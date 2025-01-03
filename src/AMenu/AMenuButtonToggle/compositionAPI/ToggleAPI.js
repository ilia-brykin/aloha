import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  setFocusToFirstLinkInPanel,
} from "../../utils/utils";
import {
  isUndefined,
} from "lodash-es";

const isMenuOpenMap = ref({});

export default function ToggleAPI(props) {
  const menuId = toRef(props, "menuId");
  const canChangeBodyClass = toRef(props, "canChangeBodyClass");

  const openMenu = () => {
    if (canChangeBodyClass.value) {
      document.body.classList.add("a_menu__wrapper_open");
      document.body.classList.remove("a_menu__wrapper_close");
    }
    isMenuOpenMap.value[menuId.value] = true;
  };

  const closeMenu = () => {
    if (canChangeBodyClass.value) {
      document.body.classList.add("a_menu__wrapper_close");
      document.body.classList.remove("a_menu__wrapper_open");
    }
    isMenuOpenMap.value[menuId.value] = false;
  };

  const removeBodyClasses = () => {
    if (canChangeBodyClass.value) {
      document.body.classList.remove("a_menu__wrapper_close");
      document.body.classList.remove("a_menu__wrapper_open");
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

  const isMenuOpen = computed(() => {
    return isMenuOpenMap.value[menuId.value];
  });

  const toggleMenuObButton = () => {
    toggleMenu();
    if (isMenuOpen.value) {
      setFocusToFirstLinkInPanel({
        menuId: menuId.value,
        panelId: "",
      });
    }
  };

  const btnToggleTitle = computed(() => {
    return isMenuOpenMap.value[menuId.value] ?
      "_A_MENU_2_BTN_CLOSE_" :
      "_A_MENU_2_BTN_OPEN_";
  });


  return {
    btnToggleTitle,
    closeMenu,
    isMenuOpen,
    removeBodyClasses,
    toggleMenu,
    toggleMenuObButton,
  };
}
