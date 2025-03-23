export const AFormPluginOptions = {
  components: {},
  containerComponents: {},
};


export default {
  install: (app, {
    components = {},
    containerComponents = {},
  } = {}) => {
    AFormPluginOptions.components = components;
    AFormPluginOptions.containerComponents = containerComponents;
  },
};
