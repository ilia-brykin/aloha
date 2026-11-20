import {
  forEach,
} from "lodash-es";

/**
 * routes: the default of the prop routes of ARouterLinkConfig (routes with a name, without excludedPathRoutes).
 */
export const ARouterLinkConfigPluginOptions = {
  routes: [],
};

function setRoutes({ routes = [], excludedPathRoutes = [] }) {
  const ROUTES = [];
  const EXCLUDED_PATH_ROUTES_MAP = {};
  if (excludedPathRoutes.length) {
    forEach(excludedPathRoutes, path => {
      EXCLUDED_PATH_ROUTES_MAP[path] = true;
    });
  }
  forEach(routes, route => {
    const PATH = route.path;
    if (route.name &&
      !EXCLUDED_PATH_ROUTES_MAP[PATH]) {
      ROUTES.push({
        path: route.path,
        name: route.name,
        meta: route.meta,
      });
    }
  });

  return ROUTES;
}

export default {
  install: (app, {
    routes = [],
    excludedPathRoutes = [],
  } = {}) => {
    ARouterLinkConfigPluginOptions.routes = setRoutes({ routes, excludedPathRoutes });
  },
};
