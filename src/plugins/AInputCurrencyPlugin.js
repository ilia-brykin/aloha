export const AInputCurrencyPluginOptions = {
  propsDefault: {
    controlsType: "none",
    currencySymbol: "€",
    currencySymbolPosition: "right",
    decimalDivider: ",",
    decimalPartLength: 2,
    iconPrepend: undefined,
    inputWidth: 200,
    integerPartMaxLength: 15,
    // undefined: the default of AFormPlugin ("float") is used
    labelPosition: undefined,
    max: 999999999999999,
    min: undefined,
    modelUndefined: undefined,
    placeholder: undefined,
    step: 1,
    thousandDivider: ".",
  },
};


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    AInputCurrencyPluginOptions.propsDefault = {
      ...AInputCurrencyPluginOptions.propsDefault,
      ...propsDefault,
    };
  },
};
