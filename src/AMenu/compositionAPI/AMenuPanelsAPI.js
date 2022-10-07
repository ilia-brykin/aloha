import {
  computed,
  getCurrentInstance,
  ref,
  toRef,
  watch,
} from "vue";

import {
  forEach,
  get,
} from "lodash-es";

export default function AMenuPanelsAPI(props, {
  itemsProParent = computed(() => ({
    main: [],
    children: {},
  })),
  itemsKeyById = computed(() => ({})),
}) {
  const keyParent = toRef(props, "keyParent");
  const APP = getCurrentInstance();
  const $router = APP.appContext.config.globalProperties.$router;

  const panelParentsOpen = ref([]);
  const isMenuLinkClicked = ref(false);

  const togglePanel = ({ parentId }) => {
    const INDEX = panelParentsOpen.value.indexOf(parentId);
    if (INDEX === -1) {
      panelParentsOpen.value.push(parentId);
    } else {
      panelParentsOpen.value.splice(INDEX, panelParentsOpen.value.length);
    }
  };

  const closeAllPanels = () => {
    panelParentsOpen.value = [];
  };

  const setPanelParentsOpen = ({ route = {}, panelParentsOpenLocal = [] }) => {
    const PARENT_ID = get(route, keyParent.value);
    if (PARENT_ID) {
      panelParentsOpenLocal.unshift(PARENT_ID);
      setPanelParentsOpen({ route: itemsKeyById.value[PARENT_ID], panelParentsOpenLocal });
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
    isRouteFound = checkRouteInPanel({ routes: itemsProParent.value.main, currentFullPath: FULL_PATH });
    if (isRouteFound) {
      return;
    }
    forEach(itemsProParent.value.children, panelRoutes => {
      isRouteFound = checkRouteInPanel({ routes: panelRoutes, currentFullPath: FULL_PATH });
      if (isRouteFound) {
        return false;
      }
    });
  };

  const clickMenuLink = () => {
    isMenuLinkClicked.value = true;
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
