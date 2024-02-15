import {
  ref,
} from "vue";

export const tablePluginOptions = ref({
  propsDefault: {
    borderType: "bordered",
  },
  config: {
    isHtmlTitleSort: false,
  },
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
