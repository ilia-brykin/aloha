import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  get,
} from "lodash-es";

export default function RouteAPI(props) {
  const filterRoutes = toRef(props, "filterRoutes");
  const keyIdRoute = toRef(props, "keyIdRoute");
  const routes = toRef(props, "routes");
  const type = toRef(props, "type");

  const routesLocal = computed(() => {
    if (filterRoutes.value) {
      return filterRoutes.value({ routes: routes.value });
    }

    return routes.value;
  });

  const routeType = computed(() => {
    if (type.value === "selectRoute") {
      return "select";
    }
    if (type.value === "multiselectRoute") {
      return "multiselect";
    }
    return undefined;
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
    routeType,
  };
}
