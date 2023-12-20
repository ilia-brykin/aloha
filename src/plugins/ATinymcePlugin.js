import {
  ref,
} from "vue";

export const tinymcePluginOptions = ref({
  propsDefault: {
    validElements: "a[href|target=_blank],strong/b,div,br,p,span,ul,ol,li,table,thead,tbody,th,tr,td",
  },
});

export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    tinymcePluginOptions.value.propsDefault = {
      ...tinymcePluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
