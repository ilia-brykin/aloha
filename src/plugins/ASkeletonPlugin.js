import {
  ref,
} from "vue";

export const skeletonPluginOptions = ref({
  propsDefault: {
    animated: true,
    rows: 3,
    tag: "div",
    text: "_A_SKELETON_LOADING_",
    throttle: 0,
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    skeletonPluginOptions.value.propsDefault = {
      ...skeletonPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
