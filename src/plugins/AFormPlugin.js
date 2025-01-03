export const formPluginOptions = {
  components: {},
  containerComponents: {},
};


export default {
  install: (app, {
    components = {},
    containerComponents = {},
  } = {}) => {
    formPluginOptions.components = components;
    formPluginOptions.containerComponents = containerComponents;
  },
};
