import {
  forEach,
} from "lodash-es";

export const routerLinkConfigPluginOptions = {
  propsDefault: {
    classColumn: "a_column a_column_12",
    classColumns: "a_columns a_columns_count_12 a_columns_gap_y_1",
    helpTextParam: "_A_ROUTER_LINK_CONFIG_HELP_TEXT_PARAM_",
    helpTextRoute: "_A_ROUTER_LINK_CONFIG_HELP_TEXT_ROUTE_",
    helpTextQuery: "_A_ROUTER_LINK_CONFIG_HELP_TEXT_QUERY_",
    helpTextTarget: "_A_ROUTER_LINK_CONFIG_HELP_TEXT_TARGET_",
    keyIdRoute: "name",
    keyLabelRoute: "path",
    labelParam: "_A_ROUTER_LINK_CONFIG_LABEL_PARAM_",
    labelQuery: "_A_ROUTER_LINK_CONFIG_LABEL_QUERY_",
    labelRoute: "_A_ROUTER_LINK_CONFIG_LABEL_ROUTE_",
    labelTarget: "_A_ROUTER_LINK_CONFIG_LABEL_TARGET_",
    routes: [],
    sortOrderRoute: "asc",
    targets: [
      {
        id: "_blank",
        label: "_A_TARGET_BLANK_",
      },
      {
        id: "_self",
        label: "_A_TARGET_SELF_",
      },
      {
        id: "_parent",
        label: "_A_TARGET_PARENT_",
      },
      {
        id: "_top",
        label: "_A_TARGET_TOP_",
      },
    ],
  },
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
    propsDefault = {},
    excludedPathRoutes = [],
  } = {}) => {
    routerLinkConfigPluginOptions.propsDefault = {
      ...routerLinkConfigPluginOptions.propsDefault,
      ...propsDefault,
      routes: setRoutes({ routes: propsDefault.routes, excludedPathRoutes }),
    };
  },
};
