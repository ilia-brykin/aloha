import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getElementId,
} from "../utils/utils";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import AKeysCode from "../../const/AKeysCode";
import {
  focusableSelector,
} from "../../const/AFocusableElements";
import {
  forEach,
} from "lodash-es";

export default function KeydownAPI(props, {
  closeMenu = () => {},
  isMenuOpen = computed(() => false),
  isSubMenuOpen = computed(() => false),
  panelParentsOpen = ref([]),
  togglePanel = () => {},
}) {
  const menuId = toRef(props, "menuId");
  const useEscapeForMobile = toRef(props, "useEscapeForMobile");

  const menuRef = ref(undefined);

  const {
    isMobileWidth,
  } = AMobileAPI();

  const isDesktopSubMenuVisibleWhenMenuClosed = computed(() => {
    return !isMobileWidth.value && !isMenuOpen.value && isSubMenuOpen.value;
  });

  const trapFocus = EVENT => {
    if (!menuRef.value) {
      return;
    }

    const FOCUSABLE_ELEMENTS = menuRef.value.querySelectorAll(focusableSelector);
    if (FOCUSABLE_ELEMENTS.length === 0) {
      EVENT.preventDefault();
      return;
    }

    const FIRST_FOCUSABLE_ELEMENT = FOCUSABLE_ELEMENTS[0];
    const LAST_FOCUSABLE_ELEMENT = FOCUSABLE_ELEMENTS[FOCUSABLE_ELEMENTS.length - 1];
    if (EVENT.shiftKey) { // Shift + Tab
      if (document.activeElement === FIRST_FOCUSABLE_ELEMENT) {
        LAST_FOCUSABLE_ELEMENT.focus();
        EVENT.preventDefault();
      }
    } else if (document.activeElement === LAST_FOCUSABLE_ELEMENT) { // Tab
      FIRST_FOCUSABLE_ELEMENT.focus();
      EVENT.preventDefault();
    }
  };

  const pressEscape = $event => {
    if (!useEscapeForMobile.value) {
      return;
    }

    closeMenu();
    $event.preventDefault();
    $event.stopPropagation();
  };

  const keydownMobile = $event => {
    const EVENT = $event || window.$event;
    if (EVENT.key === "Escape" || EVENT.keyCode === AKeysCode.escape) {
      pressEscape($event);
    } else if (EVENT.key === "Tab" || EVENT.keyCode === AKeysCode.tab) {
      trapFocus(EVENT);
    }
  };

  const setFocusToLinkInPreviousSubPanel = ({ panelIndex, panelId }) => {
    const LINK_HTML_ID = getElementId({
      menuId: menuId.value,
      id: panelId,
      suffix: "link",
    });
    const LINK = document.getElementById(LINK_HTML_ID);
    if (LINK) {
      if (panelIndex > 0) {
        const PANEL_PARENTS_OPEN_NEW = panelParentsOpen.value.slice(0, panelIndex);
        togglePanel({ parentIds: PANEL_PARENTS_OPEN_NEW, withoutFocus: true });
      }
      LINK.focus();
    }
  };

  const setFocusToLinkInNextSubPanel = ({ panelIndex }) => {
    const PANEL_ID = panelParentsOpen.value[panelIndex + 1];
    const PANEL_HTML_ID = getElementId({
      menuId: menuId.value,
      id: PANEL_ID,
      suffix: "panel",
    });
    const LINKS = document.querySelectorAll(`#${ PANEL_HTML_ID } a.a_menu__link`);
    if (LINKS.length) {
      LINKS[0].focus();
    }
  };

  const setFocusToParentLinkInMainPanel = ({ panelId }) => {
    const LINK_ID = getElementId({
      menuId: menuId.value,
      id: panelId,
      suffix: "link",
    });
    const LINK_ELEMENT = document.getElementById(LINK_ID);
    if (LINK_ELEMENT) {
      togglePanel({ parentIds: [], withoutFocus: true });
      LINK_ELEMENT.focus();
    }
  };

  const setFocus = ({ EVENT, PANEL_ELEMENT, panelIndex, panelId }) => {
    const LINKS = PANEL_ELEMENT.querySelectorAll("a.a_menu__link");
    if (EVENT.shiftKey) { // Shift + Tab
      if (document.activeElement === LINKS[0]) {
        if (panelIndex > 0) {
          setFocusToLinkInPreviousSubPanel({ panelIndex, panelId });
        } else {
          setFocusToParentLinkInMainPanel({ panelId });
        }
        EVENT.preventDefault();
      }
    } else if (document.activeElement === LINKS[LINKS.length - 1]) { // Tab
      if (panelIndex < panelParentsOpen.value.length - 1) {
        setFocusToLinkInNextSubPanel({ panelIndex });
      } else if (panelIndex > 0) {
        setFocusToLinkInPreviousSubPanel({ panelIndex, panelId });
      } else {
        setFocusToParentLinkInMainPanel({ panelId });
      }
      EVENT.preventDefault();
    }
  };

  const keydownDesktop = $event => {
    const EVENT = $event || window.$event;
    if (EVENT.key === "Tab" || EVENT.keyCode === AKeysCode.tab) {
      forEach(panelParentsOpen.value, (panelId, panelIndex) => {
        const PANEL_HTML_ID = getElementId({
          menuId: menuId.value,
          id: panelId,
          suffix: "panel",
        });
        const PANEL_ELEMENT = document.getElementById(PANEL_HTML_ID);
        if (PANEL_ELEMENT && PANEL_ELEMENT.contains(document.activeElement)) {
          setFocus({ EVENT, PANEL_ELEMENT, panelIndex, panelId });

          return false;
        }
      });
    }
  };

  const setListenerForKeydownMobile = () => {
    if (isMobileWidth.value) {
      document.addEventListener("keydown", keydownMobile);
    }
  };

  const removeListenerForKeydownMobile = () => {
    document.removeEventListener("keydown", keydownMobile);
  };

  const setListenerForKeydownDesktop = () => {
    document.addEventListener("keydown", keydownDesktop);
  };

  const removeListenerForKeydownDesktop = () => {
    document.removeEventListener("keydown", keydownDesktop);
  };

  return {
    isDesktopSubMenuVisibleWhenMenuClosed,
    menuRef,
    removeListenerForKeydownDesktop,
    removeListenerForKeydownMobile,
    setListenerForKeydownDesktop,
    setListenerForKeydownMobile,
  };
}
