import {
  computed,
  getCurrentInstance,
  ref,
} from "vue";

import AKeyParent from "../../const/AKeyParent";
import {
  forEach,
} from "lodash-es";

export default function CheckRoutesAPI({
  dataKeyById = computed(() => ({})),
  dataProParent = computed(() => ({
    main: [],
    children: {},
  })),
  isMenuLinkClicked = ref(false),
  panelParentsOpen = ref([]),
}) {
  const APP = getCurrentInstance();
  const $router = APP.appContext.config.globalProperties.$router;

  const currentRoute = computed(() => {
    return $router.currentRoute;
  });

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
    console.log("checkAllRoutes");
    if (isMenuLinkClicked.value) {
      isMenuLinkClicked.value = false;
      return;
    }
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

  return {
    checkAllRoutes,
    currentRoute,
  };
}
