import {
  computed,
  ref,
} from "vue";

import {
  forEach,
} from "lodash-es";

export const tablePluginOptions = ref({
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

export const tablePluginComponentsProps = computed(() => {
  const propsByKey = {};
  forEach(tablePluginOptions.value.config.headerTopGroups, group => {
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
    tablePluginOptions.value.propsDefault = {
      ...tablePluginOptions.value.propsDefault,
      ...propsDefault,
    };
    tablePluginOptions.value.config = {
      ...tablePluginOptions.value.config,
      ...config,
    };
  },
};
