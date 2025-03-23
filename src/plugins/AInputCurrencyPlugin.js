export const AInputCurrencyPluginOptions = {
  propsDefault: {
    controlsType: "none",
    currencySymbol: "€",
    currencySymbolPosition: "right",
    decimalDivider: ",",
    decimalPartLength: 2,
    iconPrepend: undefined,
    inputWidth: 200,
    isLabelFloat: false,
    max: undefined,
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
