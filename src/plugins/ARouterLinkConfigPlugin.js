import {
  ref,
} from "vue";

import {
  forEach,
} from "lodash-es";

export const routerLinkConfigPluginOptions = ref({
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
  },
  excludedPathRoutes: {},
});


export default {
  install: (app, {
    propsDefault = {},
    excludedPathRoutes = [],
  } = {}) => {
    if (excludedPathRoutes.length) {
      forEach(excludedPathRoutes, path => {
        routerLinkConfigPluginOptions.value.excludedPathRoutes[path] = true;
      });
    }
    routerLinkConfigPluginOptions.value.propsDefault = {
      ...routerLinkConfigPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
