import {
  computed,
  getCurrentInstance,
  ref,
  toRef,
  watch,
} from "vue";

import AKeyParent from "../../ui/const/AKeyParent";
import {
  forEach,
} from "lodash-es";

export default function AMenuPanelsAPI(props, {
  dataProParent = computed(() => ({
    main: [],
    children: {},
  })),
  dataKeyById = computed(() => ({})),
  resetSearch = () => {},
  isMenuMobile = ref(false),
  toggleMenu = () => {},
}) {
  const isBodyFocusAfterClick = toRef(props, "isBodyFocusAfterClick");

  const APP = getCurrentInstance();
  const $router = APP.appContext.config.globalProperties.$router;

  const panelParentsOpen = ref([]);
  const isMenuLinkClicked = ref(false);

  const openPanelFromSearch = ({ parentId, panelParentsOpenLocal }) => {
    if (parentId) {
      panelParentsOpenLocal.unshift(parentId);
      const PARENT_ID = dataKeyById.value[parentId][AKeyParent];
      return openPanelFromSearch({ parentId: PARENT_ID, panelParentsOpenLocal });
    }
    return panelParentsOpenLocal;
  };

  const togglePanel = ({ parentIds, parentId, isLinkInSearchPanel }) => {
    if (parentIds) {
      panelParentsOpen.value = parentIds;
    } else if (isLinkInSearchPanel) {
      const PANEL_PARENTS_OPEN = [];
      panelParentsOpen.value = openPanelFromSearch({ parentId, panelParentsOpenLocal: PANEL_PARENTS_OPEN });
    } else {
      const INDEX = panelParentsOpen.value.indexOf(parentId);
      if (INDEX === -1) {
        panelParentsOpen.value.push(parentId);
      } else {
        panelParentsOpen.value.splice(INDEX, panelParentsOpen.value.length);
      }
    }
    resetSearch();
  };

  const closeAllPanels = () => {
    panelParentsOpen.value = [];
    resetSearch();
  };

  const setPanelParentsOpen = ({ route = {}, panelParentsOpenLocal = [] }) => {
    const PARENT_ID = route[AKeyParent];
    if (PARENT_ID) {
      panelParentsOpenLocal.unshift(PARENT_ID);
      setPanelParentsOpen({ route: dataKeyById.value[PARENT_ID], panelParentsOpenLocal });
    }
    return panelParentsOpenLocal;
  };

  const checkRouteInPanel = ({ routes = [], currentFullPath = "/" }) => {
    let isRouteFound = false;
    forEach(routes, route => {
      if (route.to) {
        const { fullPath } = $router.resolve(route.to);
        if (fullPath === currentFullPath) {
          const panelParentsOpenLocal = [];
          panelParentsOpen.value = setPanelParentsOpen({ route, panelParentsOpenLocal });
          isRouteFound = true;
          return false;
        }
      }
    });
    return isRouteFound;
  };

  const checkAllRoutes = () => {
    const FULL_PATH = $router.currentRoute.value.fullPath;
    let isRouteFound = false;
    isRouteFound = checkRouteInPanel({ routes: dataProParent.value.main, currentFullPath: FULL_PATH });
    if (isRouteFound) {
      return;
    }
    forEach(dataProParent.value.children, panelRoutes => {
      isRouteFound = checkRouteInPanel({ routes: panelRoutes, currentFullPath: FULL_PATH });
      if (isRouteFound) {
        return false;
      }
    });
  };

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
    if (isMenuMobile.value) {
      toggleMenu({ isOpen: false });
    }
  };

  watch($router.currentRoute, () => {
    if (isMenuLinkClicked.value) {
      isMenuLinkClicked.value = false;
    } else {
      checkAllRoutes();
    }
  }, {
    immediate: true,
  });

  return {
    clickMenuLink,
    closeAllPanels,
    panelParentsOpen,
    togglePanel
  };
}
