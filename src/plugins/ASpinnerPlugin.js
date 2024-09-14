import {
  ref,
} from "vue";

export const spinnerPluginOptions = ref({
  propsDefault: {
    ariaLabel: "_A_SPINNER_LOADING_",
    class: "a_spinner",
    safeHtml: "",
    size: undefined,
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
