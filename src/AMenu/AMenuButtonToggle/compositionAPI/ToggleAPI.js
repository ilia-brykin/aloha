import {
  computed,
  ref,
  toRef,
} from "vue";

import FocusByDestroyAPI from "../../../compositionAPI/FocusByDestroyAPI";

import {
  isUndefined,
} from "lodash-es";

const isMenuOpenMap = ref({});

export default function ToggleAPI(props) {
  const buttonToggleProps = toRef(props, "buttonToggleProps");
  const canChangeBodyClass = toRef(props, "canChangeBodyClass");
  const menuId = toRef(props, "menuId");

  const {
    setFocusByDestroy,
  } = FocusByDestroyAPI(props);

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
    setTimeout(() => {
      if (isMenuOpen.value) {
        const BTN_TOGGLE_ID = buttonToggleProps.value?.id || `${ menuId.value }__btn_toggle`;
        const BTN_TOGGLE_ELEMENT = document.querySelector(`#${ BTN_TOGGLE_ID }`);
        if (BTN_TOGGLE_ELEMENT) {
          BTN_TOGGLE_ELEMENT.focus();
        }
      } else {
        setFocusByDestroy();
      }
    });
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
