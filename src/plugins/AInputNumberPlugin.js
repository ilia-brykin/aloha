export const AInputNumberPluginOptions = {
  propsDefault: {
    controlsType: "plus-minus",
    eAllowed: false,
    iconPrepend: undefined,
    inputWidth: 200,
    // undefined: the default of AFormPlugin ("float") is used
    labelPosition: undefined,
    max: undefined,
    min: undefined,
    modelUndefined: undefined,
    placeholder: undefined,
    precision: undefined,
    step: 1,
    stepStrictly: undefined,
    type: "number",
  },
};


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    AInputNumberPluginOptions.propsDefault = {
      ...AInputNumberPluginOptions.propsDefault,
      ...propsDefault,
    };
  },
};
