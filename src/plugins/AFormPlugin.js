export const AFormPluginOptions = {
  components: {},
  containerComponents: {},
  goToErrorCallback: undefined,
  // default position of the label of all form elements: "float", "inset" or "top"
  labelPosition: "float",
};


export default {
  install: (app, {
    components = {},
    containerComponents = {},
    goToErrorCallback,
    labelPosition = "float",
  } = {}) => {
    AFormPluginOptions.components = components;
    AFormPluginOptions.containerComponents = containerComponents;
    AFormPluginOptions.goToErrorCallback = goToErrorCallback;
    AFormPluginOptions.labelPosition = labelPosition;
  },
};
