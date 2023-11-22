import {
  computed,
  getCurrentInstance,
  ref, toRef,
} from "vue";

import AKeyId from "../../const/AKeyId";
import AKeyParent from "../../const/AKeyParent";
import {
  forEach, isFunction,
} from "lodash-es";

export default function CheckRoutesAPI(props, {
  dataKeyById = computed(() => ({})),
  dataProParent = computed(() => ({
    main: [],
    children: {},
  })),
  isMenuLinkClicked = ref(false),
  isMenuOpen = computed(() => false),
  panelParentsOpen = ref([]),
}) {
  const compareUrlCallback = toRef(props, "compareUrlCallback");

  const APP = getCurrentInstance();
  const $router = APP.appContext.config.globalProperties.$router;
  const activeRoutesIds = ref([]);

  const currentRoute = computed(() => {
    return $router.currentRoute;
  });

  const setPanelParentsOpen = ({ route = {}, ids = [] }) => {
    const PARENT_ID = route[AKeyParent];
    if (PARENT_ID) {
      ids.unshift(PARENT_ID);
      setPanelParentsOpen({ route: dataKeyById.value[PARENT_ID], ids });
    }
    return ids;
  };

  const compareUrlLocal = ({ routerFullPath, route }) => {
    const {
      fullPath,
    } = $router.resolve(route.to);

    if (isFunction(compareUrlCallback.value)) {
      return compareUrlCallback.value({
        fullPath,
        routerFullPath,
        item: route,
        currentRoute: $router.currentRoute.value,
      });
    }

    return fullPath === routerFullPath;
  };

  const checkRouteInPanel = ({ routes = [], routerFullPath = "/" }) => {
    let isRouteFound = false;
    forEach(routes, route => {
      if (route.to) {
        if (compareUrlLocal({ routerFullPath, route })) {
          const IDS_OPEN = setPanelParentsOpen({ route, ids: [] });
          if (!isMenuLinkClicked.value && isMenuOpen.value) {
            panelParentsOpen.value = IDS_OPEN;
          }
          activeRoutesIds.value = [...IDS_OPEN, route[AKeyId]];
          isRouteFound = true;
          return false;
        }
      }
    });
    return isRouteFound;
  };

  const checkAllRoutes = () => {
    const ROUTER_FULL_PATH = $router.currentRoute.value.fullPath;
    let isRouteFound = false;
    isRouteFound = checkRouteInPanel({ routes: dataProParent.value.main, routerFullPath: ROUTER_FULL_PATH });
    if (isRouteFound) {
      return;
    }
    forEach(dataProParent.value.children, panelRoutes => {
      isRouteFound = checkRouteInPanel({ routes: panelRoutes, routerFullPath: ROUTER_FULL_PATH });
      if (isRouteFound) {
        return false;
      }
    });
    if (isMenuLinkClicked.value) {
      isMenuLinkClicked.value = false;
    }
  };

  return {
    activeRoutesIds,
    checkAllRoutes,
    currentRoute,
  };
}
