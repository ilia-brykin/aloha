import {
  ref,
} from "vue";

export const cloakPluginOptions = ref({
  propsDefault: {
    align: "center",
    size: 6,
    tag: "div",
    text: "_A_CLOAK_LOADING_",
    textAlign: "right",
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    cloakPluginOptions.value.propsDefault = {
      ...cloakPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
