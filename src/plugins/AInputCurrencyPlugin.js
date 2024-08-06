import {
  ref,
} from "vue";

export const inputCurrencyPluginOptions = ref({
  propsDefault: {
    controlsType: "none",
    decimalDivider: ",",
    iconPrepend: undefined,
    inputWidth: 200,
    isLabelFloat: false,
    max: undefined,
    min: undefined,
    modelUndefined: undefined,
    placeholder: undefined,
    readonly: undefined,
    step: 1,
    symbolsAfterDecimalDivider: 2,
    thousandDivider: ".",
  },
});


export default {
  install: (app, {
    propsDefault = {},
  } = {}) => {
    inputNumberPluginOptions.value.propsDefault = {
      ...inputNumberPluginOptions.value.propsDefault,
      ...propsDefault,
    };
  },
};
