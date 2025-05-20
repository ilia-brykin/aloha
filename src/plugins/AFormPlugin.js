export const AFormPluginOptions = {
  components: {},
  containerComponents: {},
  goToErrorCallback: undefined,
};


export default {
  install: (app, {
    components = {},
    containerComponents = {},
    goToErrorCallback,
  } = {}) => {
    AFormPluginOptions.components = components;
    AFormPluginOptions.containerComponents = containerComponents;
    AFormPluginOptions.goToErrorCallback = goToErrorCallback;
  },
};
