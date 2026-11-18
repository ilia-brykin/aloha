import {
  ref,
} from "vue";

export const avatarPluginOptions = ref({
  propsDefault: {
    color: "auto",
    initialsLimit: 2,
    shape: "circle",
    size: "medium",
    tag: "span",
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    avatarPluginOptions.value.propsDefault = {
      ...avatarPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
