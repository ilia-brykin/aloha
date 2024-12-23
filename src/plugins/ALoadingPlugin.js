import {
  ref,
} from "vue";

export const loadingPluginOptions = ref({
  propsDefault: {
    align: "center",
    extra: undefined,
    size: 6,
    tag: "div",
    text: "_A_LOADING_LOADING_",
    textAlign: "right",
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    loadingPluginOptions.value.propsDefault = {
      ...loadingPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
