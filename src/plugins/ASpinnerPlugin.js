import {
  ref,
} from "vue";

export const spinnerPluginOptions = ref({
  propsDefault: {
    ariaLabel: "_LOADING_",
    class: "a_spinner",
    safeHtml: "",
    tag: "span",
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    spinnerPluginOptions.value.propsDefault = {
      ...spinnerPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
