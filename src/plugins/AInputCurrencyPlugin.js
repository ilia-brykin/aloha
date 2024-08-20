import {
  ref,
} from "vue";

export const inputCurrencyPluginOptions = ref({
  propsDefault: {
    controlsType: "none",
    currencySymbol: "€",
    currencySymbolPosition: "right",
    decimalDivider: ",",
    iconPrepend: undefined,
    inputWidth: 200,
    isLabelFloat: false,
    max: undefined,
    min: undefined,
    modelUndefined: undefined,
    placeholder: undefined,
    step: 1,
    symbolsAfterDecimalDivider: 2,
    thousandDivider: ".",
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    inputCurrencyPluginOptions.value.propsDefault = {
      ...inputCurrencyPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
