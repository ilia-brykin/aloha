import {
  computed,
  toRef,
} from "vue";

import {
  routerLinkConfigPluginOptions,
} from "../../../plugins/ARouterLinkConfigPlugin";
import {
  forEach,
  get,
} from "lodash-es";

export default function RouteAPI(props) {
  const keyIdRoute = toRef(props, "keyIdRoute");
  const routes = toRef(props, "routes");

  const routesLocal = computed(() => {
    const ROUTES = [];
    forEach(routes.value, route => {
      const PATH = route.path;
      if (route.name &&
        !routerLinkConfigPluginOptions.value.excludedPathRoutes[PATH]) {
        ROUTES.push({
          path: route.path,
          name: route.name,
          meta: route.meta,
        });
      }
    });
    return ROUTES;
  });

  const routePathKeyByKeyId = computed(() => {
    const ROUTE_PATH = {};

    forEach(routesLocal.value, route => {
      const ID = get(route, keyIdRoute.value);
      ROUTE_PATH[ID] = route.path;
    });

    return ROUTE_PATH;
  });

  return {
    routePathKeyByKeyId,
    routesLocal,
  };
}
