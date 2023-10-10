import {
  computed,
  ref,
} from "vue";

import {
  forEach,
} from "lodash-es";

export const filtersPluginOptions = ref({
  propsDefault: {

  },
  config: {
    isHtmlTitleSort: false,
    headerTopGroups: [
      {
        props: {},
        children: [
          {
            component: "filterMain",
            props: {},
          },
          {
            component: "buttonSearch",
            props: {},
          },
          {
            component: "buttonToggle",
            props: {},
          },
        ],
      },
      {
        props: {},
        children: [
          {
            component: "selectFiltersSaved",
            props: {},
          },
          {
            component: "buttonSaveTop",
            props: {},
          },
          {
            component: "buttonDeleteFiltersSaved",
            props: {},
          },
        ],
      },
    ],
    headerBottomGroups: [
      {
        props: {},
        children: [
          {
            component: "addFilterSelect",
            props: {},
          },
          {
            component: "buttonSearch",
            props: {},
          },
        ],
      },
    ],
  },
});

export const filtersPluginComponentsProps = computed(() => {
  const propsByKey = {};
  forEach(filtersPluginOptions.value.config.headerTopGroups, group => {
    forEach(group.children, child => {
      propsByKey[child.component] = child.props;
    });
  });
  forEach(filtersPluginOptions.value.config.headerBottomGroups, group => {
    forEach(group.children, child => {
      propsByKey[child.component] = child.props;
    });
  });
  return propsByKey;
});

export default {
  install: (app, {
    propsDefault = {},
    config = {},
  } = {}) => {
    filtersPluginOptions.value.propsDefault = {
      ...filtersPluginOptions.value.propsDefault,
      ...propsDefault,
    };
    filtersPluginOptions.value.config = {
      ...filtersPluginOptions.value.config,
      ...config,
    };
  },
};
