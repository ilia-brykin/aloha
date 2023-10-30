import {
  ref,
} from "vue";

export const inputNumberPluginOptions = ref({
  propsDefault: {
    controlsType: "plus-minus",
    eAllowed: false,
    iconPrepend: undefined,
    inputWidth: 200,
    isLabelFloat: false,
    max: undefined,
    min: undefined,
    modelUndefined: undefined,
    placeholder: undefined,
    precision: undefined,
    readonly: undefined,
    step: 1,
    stepStrictly: undefined,
    type: "number",
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
