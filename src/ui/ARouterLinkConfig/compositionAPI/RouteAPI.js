import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  get,
} from "lodash-es";

export default function RouteAPI(props) {
  const keyIdRoute = toRef(props, "keyIdRoute");
  const routes = toRef(props, "routes");

  const routesLocal = computed(() => {
    return routes.value;
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
