import {
  ref,
} from "vue";

export const tablePluginOptions = ref({
  config: {
    isHtmlTitleSort: false,
  },
});

export default {
  install: (app, {
    config = {},
  } = {}) => {
    tablePluginOptions.value.config = {
      ...tablePluginOptions.value.config,
      ...config,
    };
  },
};
